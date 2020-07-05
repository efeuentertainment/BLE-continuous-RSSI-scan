# BLE-continuous-RSSI-scan

Standalone feature for a continious RSSI capture of a specified MAC address device.

the code relies on the module "@abandonware/noble" from https://github.com/abandonware/noble
"discover.js" is a lighly modified example from @abandonware/noble

Install:
1) Install @abandonware/noble dependencies

2) download BLE-continious-RSSI-scan

3) 

4) 


usage:

•run
node discover.js
to find your BLE device's MAC

•run
node index.js <BLEMAC>
to continiously output your device's RSSI
