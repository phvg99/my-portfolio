#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const executeCommand = (command) => {
  try {
    return execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
};

console.log('🚀 Setting up GitHub repository for your portfolio');

rl.question('Enter your GitHub username: ', (username) => {
  rl.question('Enter your repository name (default: portfolio): ', (repoName) => {
    const repo = repoName || 'portfolio';
    
    // Update README with the correct GitHub username
    const readmePath = path.join(__dirname, '..', 'README.md');
    let readmeContent = fs.readFileSync(readmePath, 'utf8');
    readmeContent = readmeContent.replace(/yourusername/g, username);
    fs.writeFileSync(readmePath, readmeContent);
    
    console.log('\n📋 Checklist before continuing:');
    console.log('1. Create a new repository at https://github.com/new');
    console.log(`2. Repository name: ${repo}`);
    console.log('3. Make sure it\'s public');
    console.log('4. Do NOT initialize with README, .gitignore, or license\n');
    
    rl.question('Have you created the repository? (y/n): ', (answer) => {
      if (answer.toLowerCase() !== 'y') {
        console.log('Please create the repository first, then run this script again.');
        rl.close();
        return;
      }
      
      const repoUrl = `https://github.com/${username}/${repo}.git`;
      
      console.log('\n🔄 Setting up git repository...');
      
      // Check if git is already initialized
      const isGitInitialized = fs.existsSync(path.join(__dirname, '..', '.git'));
      if (!isGitInitialized) {
        executeCommand('git init');
      }
      
      // Add all files
      executeCommand('git add .');
      
      // Commit changes
      executeCommand('git commit -m "Initial setup for GitHub Pages"');
      
      // Add remote origin
      try {
        executeCommand(`git remote add origin ${repoUrl}`);
      } catch (error) {
        // If remote already exists, set it
        executeCommand(`git remote set-url origin ${repoUrl}`);
      }
      
      // Push to GitHub
      executeCommand('git push -u origin main');
      
      console.log('\n✅ Repository setup complete!');
      console.log('🌐 GitHub Actions will now deploy your site to GitHub Pages.');
      console.log('⏱️ This may take a few minutes. Check the Actions tab in your GitHub repository for progress.');
      console.log(`🎉 Once deployed, your site will be available at: https://${username}.github.io/${repo}`);
      
      rl.close();
    });
  });
}); 