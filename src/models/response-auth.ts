// Models
import { User } from './user';

export class ResponseAuth {
    code: number;
    message: string;
    user: User;
    token: string;
}
