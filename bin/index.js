#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// CLI Arguments
const args = process.argv.slice(2);
const command = args[0];

const PRO_DIR = path.join(__dirname, '../Pro prompts');
const FREE_DIR = path.join(__dirname, '../prompts');

function listPrompts(dir, label) {
  if (!fs.existsSync(dir)) {
    console.log(`[!] ${label} directory not found.`);
    return;
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  console.log(`\n=== ${label} (${files.length}) ===`);
  files.forEach((f, i) => {
    console.log(`  ${i + 1}. ${f.replace('.md', '')}`);
  });
}

function showHelp() {
  console.log(`
⚡ MotionSites.ai Prompt Library CLI
=====================================
Usage:
  templateprompts list       - List all available Pro and free prompts
  templateprompts help       - Show this help menu

Browse the full library at: https://motionsitesai-main.vercel.app/
`);
}

switch (command) {
  case 'list':
    listPrompts(PRO_DIR, 'Pro Prompts');
    listPrompts(FREE_DIR, 'Free Prompts');
    break;
  case 'help':
  default:
    showHelp();
    break;
}
