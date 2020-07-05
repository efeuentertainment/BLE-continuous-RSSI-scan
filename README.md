# BLE-continuous-RSSI-scan

Standalone feature for a continious RSSI capture of a specified MAC address device.

the code relies on the module "@abandonware/noble"
tested on Raspberry Pi3A+

# Install:
1) download BLE-continious-RSSI-scan

2) Install @abandonware/noble dependencies
https://github.com/abandonware/noble

3) npm install @abandonware/noble

4) make sure bluetooth is enabled in /boot/config.txt . the line should look like this:
#dtoverlay=pi3-disable-bt
(bluetooth uses UART for communication)

5) sudo systemctl enable hciuart.service

6) reboot
(starting the hciuart service manually often fails)

if those requirements are not met, any usage of noble will throw an error

# usage:
1) run
node discover.js
to find your BLE device's MAC
("discoverOnce.js" is a lighly modified example from @abandonware/noble )

2) run    
node index.js BLEMAC   
to continuously output your device's RSSI
