#!/usr/bin/env node

// Package

import inquirer from 'inquirer';

// Module

import { handle } from './handle.js';

// Main

const questions = [
  {
    type: 'input',
    name: 'environment',
    message:
      'What is your main workspace ( from which you should supposedly be able to modify all your folder ) : ',
  },
  {
    type: 'input',
    name: 'name',
    message: 'What will be the new name of the file : ',
  },
];

inquirer.prompt(questions).then((answers) => {
  handle(answers.name, answers.environment);
});
