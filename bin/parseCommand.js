const caesar = require('./caesar-encode');
const createWritableStream = require('./writebleStream');
const fs = require('fs');
const readline = require('readline');

function parseCommand(options) {
    const inputFile = options.input;
    const outputFile = options.output;
    const shiftLine = options.shift;
    const actionFile = options.action;
    const readResult = [];
    let writeResult;

    if (options.input) {
        const readableStream = fs.createReadStream(options.input, 'utf-8');

        readableStream.on('data', function (chunk) {
            readResult.push(chunk);
        });

        readableStream.on('end', () => {
            writeResult = caesar(readResult.join(''), shiftLine, actionFile);
            readableStream.close();

            if (outputFile) createWritableStream(writeResult, outputFile)
            else console.log(writeResult)
        })

        readableStream.on('error', (err) => {
            console.log(`No such file in directory: ${options.input} not found`);
            readableStream.close();
        });
    }

    if (!options.input) {
        const readlineInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readlineInterface.question(`Enter the text :`, text => {
            readResult.push(text);
            if (!outputFile) console.log(caesar(text, shiftLine, actionFile));
        });

        readlineInterface.on('line', (string) => {
            if (!string) {
                readlineInterface.close();
                writeResult = readResult.map(el => caesar(el, shiftLine, actionFile)).join('\n');
                if (outputFile) createWritableStream(writeResult, outputFile);

            }
            if (!outputFile) console.log(caesar(string, shiftLine, actionFile));
            readResult.push(string);
        });
    }
}

module.exports = parseCommand;

