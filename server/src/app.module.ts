import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { rfidtbl } from './rfid/rfid.entity';
import { RfidModule } from './rfid/rfid.module';
import { LostModule } from './lost/lost.module';
import { lost_historytbl } from './lost/lost.entity';
import { rechargetbl } from './recharge/recharge.entity';
import { usagetbl } from './usage/usage.entity';
import { RechargeModule } from './recharge/recharge.module';
import { UsageModule } from './usage/usage.module';
import { usertbl } from './users/usertbl.entity';
import { AuthModule } from './auth/auth.module';
// implementing table with card information

import { cardModule } from './card-rfid/card.module';
import { cardtbl } from './card-rfid/card.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.0.111',
      port: 3306,
      username: 'pmt',
      password: 'Pmt@1234',
      database: 'pmtv1',
      entities: [
        usertbl,
        rfidtbl,
        lost_historytbl,
        rechargetbl,
        usagetbl,
        cardtbl,
      ],
      synchronize: true,
    }),
    UsersModule,
    RfidModule,
    LostModule,
    RechargeModule,
    UsageModule,
    AuthModule,
    UsersModule,
    cardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
