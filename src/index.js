#!/usr/bin/env node
const { program } = require('commander');
const branchName = require('current-git-branch');

program
  .name('helios')
  .description('CLI to Helios JavaScript string utilities')
  .version('1.0.0');

program
  .option('--i18n <items>' ,'对特定文件进行调整')

console.log(branchName())  
program.parse();
const options = program.opts();
console.log(options.i18n);