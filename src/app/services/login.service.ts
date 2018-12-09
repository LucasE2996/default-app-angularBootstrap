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
        return this.http.post<UserModel>(`/api/atm/login`, user);
    }

    public logout(): void {
        localStorage.removeItem("loggedUsers");
    }

    public getLoggedUsers(): Array<UserModel> {
        return JSON.parse(localStorage.getItem("loggedUsers"));
    }

    /**
     * showMenu
     */
    public showMenu(value: boolean): void {
        this.showMenuEvent.emit(value);        
    }
}