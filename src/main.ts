import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './common/guard/auth.guard'; //全局守卫
import * as cookieParser from 'cookie-parser';
import { HttpExceptionFilter } from './Util/HttpExceptionFilter';
import { logger } from './Util/logger'
import { Utils } from './Util/util'
import http from './config/http'
async function bootstrap() {
  logger.info('start service')
  const app = await NestFactory.create(AppModule);
  // app.enableCors(); //处理跨域
  app.useGlobalGuards(new AuthGuard()); //鉴权
  app.useGlobalFilters(new HttpExceptionFilter()); // 异常抛出封装
  app.use(cookieParser('linefeng')); //cookies 传入密钥
  await app.listen(http.port);
  logger.info(`watch -- http://${Utils.getIp()}:${http.port}`)
}
bootstrap();
