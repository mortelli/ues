import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  toUpperCase(text: string): string {
    // TODO: implement
    return '';
  }
}
