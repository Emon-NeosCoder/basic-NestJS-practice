import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; data: number[]; status: number } {
    return {
      message: 'Hello World!',
      data: [1, 2, 3, 4, 5],
       status: 200,
    };
  }
}
