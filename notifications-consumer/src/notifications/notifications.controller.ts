import { Controller } from '@nestjs/common';
import { EventPattern, Payload, Ctx } from '@nestjs/microservices';
import { RmqContext } from '@nestjs/microservices';

@Controller()
export class NotificationsController {
    @EventPattern('register')
    handleRegisterNotification(@Payload() data: any, @Ctx() context: RmqContext) {
        console.log('Recebida mensagem de registro:', data);
    }

    @EventPattern('confirmation')
    handleConfirmationNotification(@Payload() data: any, @Ctx() context: RmqContext) {
        console.log('Recebida mensagem de confirmaçāo:', data);
    }
}
