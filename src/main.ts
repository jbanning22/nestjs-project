import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3500);
}
bootstrap();

//   app.use(
//     cookieSession({
//       keys: ['asdfasdf'],
//     }),
//   );
// //   app.useGlobalPipes(
// //     new ValidationPipe({
// //       whitelist: true,
// //     }),
// //   );
