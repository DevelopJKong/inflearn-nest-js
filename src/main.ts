import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  const PORT = process.env.PORT;
  const handleListening = () => {
    console.log(`http://localhost${PORT}`);
  };
  await app.listen(PORT, handleListening);
}
bootstrap();
