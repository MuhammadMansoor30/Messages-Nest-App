import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService{
    // Created using Inversion control using the Depenedency Injection (DI)
    constructor(public messagesRepo: MessagesRepository){}

    // Created using the traditional method of passing and creating own dependencies.
    // messagesRepo: MessagesRepository;
    // constructor(){
    //     this.messagesRepo = new MessagesRepository();
    // }

    async findOne(id: string): Promise<any>{
        return await this.messagesRepo.fetchOne(id);
    } 

    async findAll(){
        return await this.messagesRepo.fetchAll();
    }

    async create(content: string){
        return await this.messagesRepo.create(content);
    }
}

// NOTES (SEC 5):
// In class declaration we dot need to specify variable name using let, cont or var to declare a variable.
// The Services file is used to add and hold our entire business logic of the project or messages.
// It request the repository from the data and applies logic to it an dreturns that data back to the controllers.
// Services file creates its own dependency onto teh repositry file as it dependent on it for execution.
// Nextjs does not follow this prnciple so we will later use dependency injection feacture of Nestjs to inject/add dependecies.
// The inversion of control principle works on the saying that no class can created dependecy on another class on which it is dependent.
// For this DI helps us and make the inversion of control easy to understand.
// Injectable decorative is used to inject/add the class to the Dependecy Injection (DI) container for checking dependencies and creating the instances for that class.
// We dont need to add Injectable to the controller class only services and repository instances rae created in DI conatiner to be used by different or same controller.