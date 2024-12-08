import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController]
})
export class MessagesModule {}


// NOTES (SEC 3):
// Generating a messages Module to bundle all the logic related to the messaging application.
// Exporting it so that we can use it in the main.ts file to listen to our app.