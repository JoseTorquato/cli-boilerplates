import fs from 'node:fs';
import path from 'node:path';

import shellJs from 'shelljs';

import { ChoiceBoilerplate } from '../enums/choiceBoilerplate.js';
import { GitName } from '../enums/gitName.js';
import { IAnswers } from '../interfaces/answers.js';

export class GenerateController {
  public handler(answers: IAnswers) {
    if (answers.repository === ChoiceBoilerplate.TYPESCRIPT) this._exec(GitName.TYPESCRIPT, answers.dirName)
  }

  private _exec(gitName: string, dirName: string) {
    try {
      shellJs.cd(path.resolve());
      shellJs.exec(`git clone https://github.com/JoseTorquato/${gitName}.git`)
  
      fs.renameSync(
        `${path.join(path.resolve(), gitName)}`, 
        `${path.join(path.resolve(), dirName)}`
      )
  
      console.log('Arquivos criados com sucesso!')
      return shellJs.exit()
    } catch (e) {
      console.error(e)
    }
  }
}

export const generateController = new GenerateController();
