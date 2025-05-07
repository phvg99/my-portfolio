/**
 * This script checks if port 3000 is in use and kills the process if necessary
 */
const { execSync } = require('child_process');
const os = require('os');

const PORT = 3000;

try {
  console.log(`Checking if port ${PORT} is in use...`);
  
  if (os.platform() === 'win32') {
    // Windows version using netstat and taskkill
    try {
      const netstatOutput = execSync(`netstat -ano | findstr :${PORT}`, { encoding: 'utf8' });
      
      if (netstatOutput) {
        console.log(`Port ${PORT} is in use. Attempting to free it up...`);
        
        // Extract the PIDs from all matching lines
        const lines = netstatOutput.split('\n').filter(Boolean);
        const uniquePids = new Set();
        
        // Process each line to extract PIDs
        lines.forEach(line => {
          const pidMatches = line.match(/(\d+)$/);
          if (pidMatches && pidMatches[1]) {
            uniquePids.add(pidMatches[1]);
          }
        });
        
        if (uniquePids.size > 0) {
          console.log(`Found ${uniquePids.size} process(es) using port ${PORT}`);
          
          // Kill each process
          for (const pid of uniquePids) {
            console.log(`Killing process with PID: ${pid}`);
            try {
              execSync(`taskkill /F /PID ${pid}`);
              console.log(`Successfully killed process with PID ${pid}`);
            } catch (killError) {
              console.log(`Could not kill process with PID ${pid}. Error: ${killError.message}`);
            }
          }
          
          // Double-check the port is free
          try {
            const checkAgain = execSync(`netstat -ano | findstr :${PORT}`, { encoding: 'utf8' });
            if (checkAgain) {
              console.log(`Warning: Port ${PORT} might still be in use after kill attempts`);
            }
          } catch (e) {
            // No output means port is free
            console.log(`Port ${PORT} is now free`);
          }
        }
      }
    } catch (e) {
      // If netstat doesn't find anything, it will throw an error
      console.log(`Port ${PORT} is not in use.`);
    }
  } else {
    // Unix/Linux/Mac version using lsof and kill
    try {
      const output = execSync(`lsof -i :${PORT} -t`, { encoding: 'utf8' });
      const pid = output.trim();
      
      if (pid) {
        console.log(`Port ${PORT} is in use by PID: ${pid}. Killing it...`);
        execSync(`kill -9 ${pid}`);
        console.log(`Successfully killed process on port ${PORT}`);
      }
    } catch (e) {
      // If lsof doesn't find anything, it will throw an error
      console.log(`Port ${PORT} is not in use.`);
    }
  }
} catch (error) {
  // This will catch any general errors in the try block
  console.log('Error checking port:', error.message);
  console.log('Continuing with startup...');
}

console.log('Port check complete. Starting server...'); 