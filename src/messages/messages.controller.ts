import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){

    }

    @Post()
    generateMessage(){

    }

    @Get('/:id')
    getMessage(){

    }
}


// NOTES (SEC 3):
// Creating the controllers file using the generate command mentioned in main.ts file.
// Here we will define 3 methods to Get and Pots the messages data.