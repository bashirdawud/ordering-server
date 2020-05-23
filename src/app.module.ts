import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderingModule } from './ordering/ordering.module';
import { KnexModule } from 'nestjs-knex';


@Module({
  imports: [OrderingModule,
    KnexModule.forRoot({
      config : {
        client : "sqlite3",
        useNullAsDefault : true,
        connection : {
          filename: "./orders.sqlite"
        }
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
