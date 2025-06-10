#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");

const projectName = process.argv[2] || "my-react-app";
const repo = "your-username/react19-tailwind-template";

console.log(`Cloning ${repo} into ${projectName}...`);

execSync(`npx degit ${repo} ${projectName}`, { stdio: "inherit" });

console.log("Installing dependencies...");
execSync(`cd ${projectName} && npm install`, { stdio: "inherit" });

console.log("All done! 🚀");
