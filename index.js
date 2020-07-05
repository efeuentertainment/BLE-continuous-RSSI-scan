let noble = {}; //only load BLE module if requested

let bleRssi = 0;

//let peripheralIdOrAddress = hard.BLEMAC.toLowerCase();
let peripheralIdOrAddress = "e6:4e:57:09:74:e4".toLowerCase(); //for debug

//only load BLE module if requested
//1. make sure bluetooth is enabled in /boot/config.txt . should look like this:
//  #dtoverlay=pi3-disable-bt
//  (bluetooth uses UART for communication)
//2. sudo systemctl enable hciuart.service
//if those requirements are not met, require() will throw an error
try {
//  noble = require('hsuszshshdh');
  noble = require('@abandonware/noble');
} catch(err) {
  console.log(`BLE inactive. Bluetooth in /boot/config.txt disabled, or hciuart.service not running`);
  peripheralIdOrAddress = 0;
}

if (peripheralIdOrAddress !== 0) {
  console.log(`BLE inactive. Bluetooth in /boot/config.txt disabled, or hciuart.service not running`);
} else {
//start BLE scan
noble.on('stateChange', function (state) {
  if (state === 'poweredOn') {
    console.log(`adapter state:\t${state}`);
    if (peripheralIdOrAddress === 0) {
      console.log(`BLE inactive. no BLE MAC address set.`);
    } else {
      //noble.startScanning();
      noble.startScanning([], true) //allows duplicates while scanning
    }
  } else {
    console.log(`adapter state:\t${state}`);
    noble.stopScanning();
  }
});

//function constatly searches for the specified BLE MAC address, and captures its RSSI value
noble.on('discover', function (peripheral) {
  if (peripheral.id === peripheralIdOrAddress || peripheral.address === peripheralIdOrAddress) {
    bleRssi = peripheral.rssi;
    console.log(`BLE update. Name:${peripheral.advertisement.localName} RSSI:${peripheral.rssi} txP:${peripheral.advertisement.txPowerLevel}`);
  }
});
}
