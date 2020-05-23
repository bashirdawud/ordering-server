import { Module } from '@nestjs/common';

import { OrderingController } from './ordering.controller';
import { KnexModule } from 'nestjs-knex';
import { AppService } from 'src/app.service';

@Module({
  providers: [ AppService],
  controllers: [OrderingController]
})
export class OrderingModule {}
