import { MessagesRepository } from "./messages.repository";

export class MessagesService{
    messagesRepo: MessagesRepository;
    
    constructor(){
        this.messagesRepo = new MessagesRepository();
    }

    async findOne(id: string){
        await this.messagesRepo.fetchOne(id);
    } 

    async findAll(){
        await this.messagesRepo.fetchAll();
    }

    async create(content: string){
        await this.messagesRepo.create(content);
    }
}

// NOTES (SEC 5):
// In class declaration we dot need to specify variable name using let, cont or var to declare a variable.
// The Services file is used to add and hold our entire business logic of the project or messages.
// It request the repository from the data and applies logic to it an dreturns that data back to the controllers.
// Services file creates its own dependency onto teh repositry file as it dependent on it for execution.
// Nextjs doesnot follow this prnciple so we will later use dependency ijection feacture of Nestjs to inject/add dependecies.