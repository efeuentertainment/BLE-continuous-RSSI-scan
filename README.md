## BLE-continuous-RSSI-scan

Standalone feature for a continious RSSI capture of a specified MAC address device.

the code relies on the module "@abandonware/noble" https://github.com/abandonware/noble   
tested on Raspberry Pi3A+. it's based on one of abandonware's examples.

### Installation on a Raspberry Pi:
1) download BLE-continious-RSSI-scan

2) Install @abandonware/noble and its dependencies   
```javascript
sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev
```
```javascript
npm install @abandonware/noble
```
4) make sure bluetooth is enabled in /boot/config.txt . the line should look like this:   
```bash
#dtoverlay=pi3-disable-bt
```
(bluetooth uses UART for communication)

5) enable the required service
```bash
sudo systemctl enable hciuart.service
```
6) reboot (starting the hciuart service manually often fails)

if those requirements are not met, any usage of noble will throw an error

### Usage:
```bash
node index.js BLEMAC   
```
to continuously output your device's RSSI

you can use:   
```bash
node discoverOnce.js   
```
to find your BLE device's MAC   
("discoverOnce.js" is a lighly modified example from @abandonware/noble )

