# Caesar-cipher-cli-tool
Caesar-cipher-cli-tool

##### To install app to computer you shoud have(install) Node.js and GIT.

#### After that, take this steps:

1. Clone this repo to you computer: `git clone git@github.com:bulletxenus/Caesar-cipher-cli-tool.git -b caesar-cipher-cli-tool`.
2. Change current directory on cloned directory.
3. Make `npm install` to install app and dependencies.
4. Make `npm link` to have a possible to run app without `npm`.
After that you can run `caesar-cli --help` or `node ./caesar-cipher-cli.js --help` to see hints, that can help you.


#### `--help`:

Options:

`-V, --version:        output the version number`  
`-i, --input <type>:   input file`  
`-o, --output <type>:  output file`  
`-a, --action <type>:  an action encode/decode`  
`-s, --shift <type>:   a shift of encode/decode`  
`-h, --help:           display help for command`  

### App working with two required arguments:
* `-a, --action` - have two different types: `encode` - to work in encode mode and `decode` - to work in decode mode.
* `-s, --shift` - any number > 0 and < 0

Standart command lookes like: `caesar-cli -i input.txt -a encode -s 7 -o output.txt`
