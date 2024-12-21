import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.services';

@Module({
  controllers: [MessagesController],
  providers: [MessagesRepository, MessagesService]
})
export class MessagesModule {}


// NOTES (SEC 3):
// Generating a messages Module to bundle all the logic related to the messaging application.
// Exporting it so that we can use it in the main.ts file to listen to our app.
// We will use our Repository and Services files to add as providers for the Messages Module.
// Proivders are those classes which provide some dependency to the controllers mentioned.
// It is the last step in the Dependency Injection (DI) steps.