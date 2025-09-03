import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { Random } from 'src/utils/random';
import { ComprasController } from './compras.controller';
import { ComprasService } from './compras.service';

@Module({
  imports: [PrismaModule],
  controllers: [ComprasController],
  providers: [ComprasService, Random]
})
export class ComprasModule {}
