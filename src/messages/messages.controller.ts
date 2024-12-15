import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.services';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor(){
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    generateMessage(@Body() body: CreateMessageDto){
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        return this.messagesService.findOne(id);
    }
}


// NOTES (SEC 3 + 4):
// Creating the controllers file using the generate command mentioned in main.ts file.
// Here we will define 3 methods to Get and Pots the messages data.
// In Nestjs there are many different decorators to access data from the http request.
// These are:
// @Params('id') decorator to get params from request, @Body() decorator to get the body of http request.
// @Query() decorator to get query params of request and @Header() decorator to get the headers of http request.
// Similarly there are different types of decorators: Class, Method and Argument.
// @Controller is a class decorator which means it is applied to the entire class.
// @Get, @Post and other http methods are method decorators which means they are applied to an entire method/function.
// @Params and other three http decorators are argument decorators and are appliedn to arguments of a method/function.
// Adding CreateMessageDto as type of the body object to add validations to teh POST Route after importing it. 
// Adding Messages Services dependency to get the get from the file we have created using he actual path defined. 