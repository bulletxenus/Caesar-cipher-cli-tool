const fs = require('fs');

function createWritableStream(text, outputFile) {
    const writableStream = fs.createWriteStream(outputFile, {flags: 'a'});
    writableStream.on('ready', () => {
        writableStream.write(`${text}\n`, 'utf-8')
    });
}

module.exports = createWritableStream;
