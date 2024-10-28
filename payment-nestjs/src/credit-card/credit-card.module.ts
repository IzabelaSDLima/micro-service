import { Module } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { CreditCardController } from './credit-card.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaService } from 'src/prisma.service';
@Module({
  imports: [ClientsModule.register([{
    name: 'NOTIFICATION_SERVICE',
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'notification',
      noAck: true,
      queueOptions: {
        durable: true,
      },
    },
  },
  ]),
  ],
  controllers: [CreditCardController],
  providers: [CreditCardService, PrismaService],
})
export class CreditCardModule { }
