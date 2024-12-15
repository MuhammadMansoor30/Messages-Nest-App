import { IsString } from "class-validator";

export class CreateMessageDto {
    @IsString()
    content: string
}

// NOTES (SEC 4):
// Creating a fiile and folder named dto (Data Transfer Objects) to add validations to our route handlers.
// These dto classes will act as an object and will be used as types of teh body of the route params to validate requests.
// The IsString() decorator is used to validate the data coming to the request and the data must be a string.
// The IsString() decorator comes from the class-validator library we have just installed to keep the pipes up and running.
// We will export this class and use it in the controller file with specific route handlers.