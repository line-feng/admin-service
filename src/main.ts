import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './common/guard/auth.guard'; //全局守卫
import * as cookieParser from 'cookie-parser';
import { HttpExceptionFilter } from './Util/HttpExceptionFilter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors(); //处理跨域
  app.useGlobalGuards(new AuthGuard());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(cookieParser('linefeng')); //cookies 传入密钥
  await app.listen(9999);
}
bootstrap();
