import { Injectable } from '@nestjs/common';
import { concat, shuffle } from './utils/arrayUtils';
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

  concat(inputList1: Array<number>, inputList2: Array<number>): Array<number> {
    return concat(inputList1, inputList2);
  }

  fetchResource(url: string): string {
    const url2 = trimText(url);
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // validate fragment locator
    const validUrl = !!urlPattern.test(url2);

    if (validUrl) {
      // const xhr = new XMLHttpRequest();
      // xhr.open('GET', url2);
      // xhr.onload = () => console.log(JSON.parse(xhr.responseText));
      // xhr.send();

      fetch(url)
        .then((response) => {
          if (response.ok) {
          return response.json();
          }
          throw new Error();
        })
        .then((responseJson) => {
        console.log('json response is', responseJson);
        return responseJson;
        });
    }
    return '';
  }
}
