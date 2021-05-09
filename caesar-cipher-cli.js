#!/usr/bin/env node

const arg = require('commander');
const parseCommand = require('./bin/parseCommand');
const program = new arg.Command();


program
    .version('1.0.0')
    .name('caesar-chipset-cli')
    .option('-i, --input <type>', 'input file')
    .option('-o, --output <type>', 'output file')
    .requiredOption('-a, --action <type>', 'an action encode/decode')
    .requiredOption('-s, --shift <type>', 'a shift of encode/decode');

program.parse(process.argv);

const options = program.opts();

parseCommand(options);

