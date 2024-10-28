import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],  // URL do RabbitMQ
      queue: 'notification',           // Nome da fila
      queueOptions: {
        durable: true,                  // Fila persistente
      },
    },
  });

  await app.listen();
  console.log('Microservice is listening...');
}

bootstrap();
