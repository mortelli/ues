import { Injectable } from '@nestjs/common';
import { reverse, shuffle } from './utils/arrayUtils';
import { translateNumber } from './utils/numberUtils';
import { trimText } from './utils/textUtils';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  toUpperCase(inputText: string): string {
    const trimmedText = trimText(inputText);
    let partialSolution = '';
    trimmedText.split(' ').forEach((word) => {
      let newWord = word;
      if (!isNaN(Number(word))) {
        newWord = translateNumber(Number(word));
      }
      partialSolution += ' ' + newWord;
    });
    return partialSolution.toLocaleUpperCase();
  }

  shuffle(inputList: Array<number>): Array<number> {
    return shuffle(inputList);
  }

  reverse(inputList: Array<number>): Array<number> {
    return reverse(inputList);
  }
}
