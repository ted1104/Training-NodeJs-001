//BUILT IN MODULES
// OS MODULE

const os = require("os");

//gettings user info
const user = os.userInfo();
console.log(user);

//uptime system
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  hostname: os.hostname(),
  networkInterface: os.networkInterfaces(),
  platform: os.platform(),
  homedire: os.homedir(),
};

console.log(currentOs);
