import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  trimText(text: string): string {
    return text.trim();
  }

  toUpperCase(inputText: string): string {
    const trimmedText = this.trimText(inputText);
    return trimmedText.toLocaleLowerCase();
  }
}
