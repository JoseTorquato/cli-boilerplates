#!/usr/bin/env/node

import inquirer from 'inquirer';

import { IAnswers } from './interfaces/answers.js';
import { questions } from './questions.js';

import { GenerateController, generateController } from './controller/generate.js';

class Init {
  constructor(private readonly generateController: GenerateController) {
    inquirer.prompt(questions)
      .then((answers: IAnswers) => {
        this.generateController.handler(answers)
      });
  }
}

new Init(generateController);
