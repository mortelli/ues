import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  trimText(inputText: string): string {
    return inputText.trim();
  }

  toUpperCase(inputText: string): string {
    const trimmedText = this.trimText(inputText);
    return trimmedText.toLocaleUpperCase();
  }
}
