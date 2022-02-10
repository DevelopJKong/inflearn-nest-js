import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from 'src/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  const PORT = 3000;
  const handleListening = () => {
    console.log(`http://localhost${PORT}`);
    
  }
  await app.listen(PORT,handleListening);
}
bootstrap();
