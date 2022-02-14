import { CatsService } from './cats.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get()
  getCurrnetCat() {
    return 'all cat';
  }

  @Post()
  async signUp() {
    return 'signup';
  }

  @Post('login')
  login() {
    return 'login';
  }

  @Post('logout')
  logout() {
    return 'logout';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}
