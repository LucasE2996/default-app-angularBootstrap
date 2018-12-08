import { UserModel } from '../models/user.model';

export class UserService {

    constructor() {

    }

    public getUser(id: number): UserModel {
        // @TODO implement http get
        return JSON.parse(localStorage.getItem('loggedUsers'))
            .filter((user: UserModel) => user.id === id);
    }
}