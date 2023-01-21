import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTest(): string {
    return 'Hello Test!';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
