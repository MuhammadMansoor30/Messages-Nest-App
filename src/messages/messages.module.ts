import { Module } from '@nestjs/common';

@Module({})
export class MessagesModule {}


// NOTES (SEC 3):
// Generating a messages Module to bundle all the logic related to the messaging application.
// Exporting it so taht we can use it in the main.ts file to listen to our app.