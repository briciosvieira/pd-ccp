import { Module } from '@nestjs/common';
import { ComprasModule } from '../compras/compras.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ComprasModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
