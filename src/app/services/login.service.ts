import { UserModel } from '../models/user.model';
import { LoginFormModel } from '../models/login-form.model';

export class LoginService {

    constructor () {

    }

    public login(user: LoginFormModel): void {
        // @TODO get user from server
        localStorage.setItem("loggedUsers", JSON.stringify([{
            id: this.timesTamp(),
            account: user.account,
            name: `USER_${this.timesTamp()}`
        },
        {
            id: this.timesTamp(),
            account: user.account,
            name: `USER_${this.timesTamp()}`
        },
        {
            id: this.timesTamp(),
            account: user.account,
            name: `USER_${this.timesTamp()}`
        },
        {
            id: this.timesTamp(),
            account: user.account,
            name: `USER_${this.timesTamp()}`
        },
        {
            id: this.timesTamp(),
            account: user.account,
            name: `USER_${this.timesTamp()}`
        }
    ]));
    }

    public logout(): void {
        localStorage.removeItem("loggedUsers");
    }

    public getLoggedUsers(): Array<UserModel> {
        return JSON.parse(localStorage.getItem("loggedUsers"));
    }

    private timesTamp(): number {
        return Math.floor(Date.now() / 1000);
    }
}