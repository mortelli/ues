import { Injectable } from '@nestjs/common';
import { trimText } from './utils/utils';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  toUpperCase(inputText: string): string {
    const trimmedText = trimText(inputText);
    return trimmedText.toLocaleUpperCase();
  }
}
