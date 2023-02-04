#!/usr/bin/env node
const { program } = require('commander');

program
  .name('helios')
  .description('CLI to Helios JavaScript string utilities')
  .version('1.0.0');

program
  .option('--i18n <items>' ,'对特定文件进行调整')
  
program.parse();
const options = program.opts();
console.log(options.i18n);