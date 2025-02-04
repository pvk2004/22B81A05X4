const os = require('os');

setInterval(() => {
    const totalMemory = os.totalmem(); 
    const freeMemory = os.freemem(); 
    
    const usedMemory = totalMemory - freeMemory;
    const usedMemoryPercentage = (usedMemory/totalMemory) * 100;
    const freeMemoryPercentage = (freeMemory / totalMemory) * 100;
    
    // const usedMemoryInMB = (usedMemory / (1024 * 1024)).toFixed(2);
    
    console.log(`Used Memory: ${usedMemory}`);
    console.log(`Free Memory: ${freeMemory}`);
    console.log(`Used Memory Percentage: ${usedMemoryPercentage.toFixed(2)}%`);
    console.log(`Free Memory Percentage: ${freeMemoryPercentage.toFixed(2)}%`);
    console.log("-".repeat(30));
}, 5000);