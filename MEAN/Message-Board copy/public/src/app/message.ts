import { User } from './user';
import { Comment } from './comment';

export class Message {
   _id: string;
   message: string;
   user: User;
   comments: Comment[];
   createdAt: any;
   updatedAt: any;
}
