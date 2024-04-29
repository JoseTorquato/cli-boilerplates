import path from "path";
import fs from "fs";

import { ChoiceBoilerplate } from "./enums/choiceBoilerplate.js";
import { IQuestion } from "./interfaces/question.js";
import { ErrorMessage } from "./enums/ errorMessage.js";

export const questions: IQuestion[] = [
  {
    type: 'list',
    name: 'repository',
    message: 'Qual boilerplate quer usar?',
    choices: [ChoiceBoilerplate.TYPESCRIPT],
  },
  {
    type: 'input',
    name: 'dirName',
    message: 'Qual nome da pasta que deseja criar?',
    validate(dirName: string) {
      if (!dirName) return ErrorMessage.NAME_IS_NULL
      if (/[^\w\s-]/.test(dirName)) return  ErrorMessage.SPECIAL_CARACTERS

      try {
        const dir = path.resolve(dirName);
        fs.accessSync(dir, fs.constants.R_OK)

        return ErrorMessage.DIRNAME_EXISTS
      } catch (e) {}

      return true
    }
  },
];