// Packages

import process from 'process';
import path from 'path';

// Modules

import { args, optionArgs } from './command.js';
import { renameBasic, renameFast } from './rename.js';

export const handle = (name, environment) => {
  if (optionArgs) {
    // If the user use the command with an option, we build the file path based on the current folder in which the CLI command is executed in the CLI (process.env.pwd)
    const filePath = path.resolve(process.env.pwd, optionArgs);
    const newFilePath = path.resolve(process.env.pwd, name); // To prevent from moving the file in unexpected directory
    renameFast(filePath, newFilePath);
  } else {
    // Else, we just use the folder path and file path provided by the user
    if (path.basename(process.cwd()) !== environment) {
      throw new Error(`Please, move to /${environment} to use this`); // Handle the case where the user isn't in his worspace to modify the folder
    } else {
      const filePath = path.resolve(args[0], args[1]);
      const newFilePath = path.resolve(args[0], name); // To prevent from moving the file in unexpected directory
      renameBasic(filePath, newFilePath);
    }
  }
};
