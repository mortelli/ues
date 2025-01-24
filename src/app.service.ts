import { Injectable } from '@nestjs/common';
import { translateNumber, trimText } from './utils/utils';

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
}
