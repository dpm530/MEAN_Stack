import { Message } from './message';
import { Comment } from './comment';

export class User {
   _id: string;
   name: string;
   email: string;
   password: string;
   messages: Message[];
   comments: Comment[];
   createdAt: any;
   updatedAt: any;
}
