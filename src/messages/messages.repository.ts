import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesRepository{
    async fetchOne(id: string){
        const contents = await readFile("messages.json", "utf8");
        const messages = JSON.parse(contents);

        return messages[id];
    }

    async fetchAll(){
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }

    async create(content: string){
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);
        messages[id] = {id, content};
        
        await writeFile('messages.json', JSON.stringify(messages));
    }
}

// NOTES (SEC 5):
// The repository is where we will read or write data to our data source.
// It direclty communicates with data source and retrieves the data to sned it to services as requested.
// We can connect different databases and can create TypeORMs or Mongoose schema in this repositry.
// In this case we will use file storage using the node 'fs' package.
// Injectable decorative info is provided in the messages.services.ts file.