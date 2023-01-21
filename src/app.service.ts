import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPing(): string {
    return 'Hello Pong!';
  }
  getTest(): string {
    return 'Hello Test!';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
