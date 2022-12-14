import { User } from './../users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
