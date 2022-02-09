import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  const handleListening = () => {
    console.log(`http://localhost${PORT}`);
    
  }
  await app.listen(PORT,handleListening);
}
bootstrap();
