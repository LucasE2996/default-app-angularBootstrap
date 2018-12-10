import { UserModel } from '../models/user.model';
import { LoginFormModel } from '../models/login-form.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    public showMenuEvent = new EventEmitter();

    constructor (
        private readonly http: HttpClient
    ) {

    }

    public login(user: LoginFormModel): Observable<UserModel> {
        return this.http.post<UserModel>(`/api/account/login`, user);
    }

    public logout(accountNumber: string): Observable<void> {
        return this.http.get<void>(`/api/account/logout/${accountNumber}`);
    }

    public getLoggedUsers(): Observable<Array<UserModel>> {
        return this.http.get<Array<UserModel>>(`https://atmgswmaisamaximo.herokuapp.com/account/loggedAccounts`);
    }

    /**
     * showMenu
     */
    public showMenu(value: boolean): void {
        this.showMenuEvent.emit(value);        
    }
}