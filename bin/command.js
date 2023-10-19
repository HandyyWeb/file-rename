import yargs from 'yargs/yargs';
const usage = 'Usage : rename <folder name> <file name>';

const options = yargs(process.argv.slice(2)) // When we use yargs as an ES6 module, we need to slice the first 2 elemnts : node.exe and scrip paths
  .usage(usage)
  .check((argv) => {
    // Check for the right numbers of arguments
    if (argv._.length < 2 && !argv.c) {
      throw new Error('Missing arguments');
    } else if (argv._.length > 2) {
      throw new Error('Too many arguments');
    } else {
      return true;
    }
  })
  .options('current', {
    alias: 'c',
    describe:
      'Get directly in the current directory in which the command is executed in the CLI',
    type: 'string',
    demandOption: false,
  })
  .help(true).argv;

export const args = yargs(process.argv.slice(2)).argv._;
export const optionArgs = yargs(process.argv.slice(2)).argv.c;
