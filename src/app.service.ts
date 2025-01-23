import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  toUpperCase(inputText: string): string {
    return inputText.toUpperCase();
  }
}
