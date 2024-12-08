import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


// NOTES (SEC 3):
// Creating the nestjs application using the NestCli.
// For this we have installed the nestcli globally and created nest project using command: next new 'projectName'.
// Commenting out the eslint file because typescript itself provides good error handling so we dont need it. We can also leave it as it is and will not be a problem.
// We can quickly generate module files usign the nest command: nest generate module 'module-name'.
// We can quickly generate controller files using the nest command: nest generate controller 'controller-name/module-name' --flat
// Module name is used to add depnedcy of that moduel to the controller and link both together.
// --flat tells nest to not create a new controller folder.
// It saves time and makes the process easy.