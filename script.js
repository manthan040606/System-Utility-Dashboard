const os = require('os');
const fs = require('fs');
const path = require('path')

// Fetching system information
const platform = os.platform();
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const cpuDetails = os.cpus();

// Displaying system information on the console
console.log(`Platform: ${platform}`);
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`CPU: ${JSON.stringify(cpuDetails, null, 2)}`); // Using JSON.stringify for better formatting

const filepath = path.join(__dirname, 'logs', 'system-info.txt');

// Constructing the system information string
const sysinfo = `System Information
Platform: ${platform}
Total Memory: ${totalMemory}
Free Memory: ${freeMemory}
CPU: ${JSON.stringify(cpuDetails, null, 2)}
`;

// Writing the system information to the log file
fs.mkdirSync(path.join(__dirname, 'logs'), { recursive: true }); // Ensure 'logs' directory exists
fs.writeFileSync(filepath, sysinfo, 'utf8');

console.log(`System information saved to ${filepath}`);



