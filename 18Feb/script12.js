const os = require('os');

const hostname = os.hostname();

const platform = os.platform();

const uptime = os.uptime();

const totalMemory = (os.totalmem() / (1024 * 1024)).toFixed(2);

const freeMemory = (os.freemem() / (1024 * 1024)).toFixed(2);

console.log(`System Information:`);
console.log(`Hostname: ${hostname}`);
console.log(`Platform: ${platform}`);
console.log(`Uptime: ${uptime} seconds`);
console.log(`Total Memory: ${totalMemory} MB`);
console.log(`Free Memory: ${freeMemory} MB`);
