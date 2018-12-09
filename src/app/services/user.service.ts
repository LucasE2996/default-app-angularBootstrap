import { UserModel } from '../models/user.model';
import { Injectable } from '@angular/core';
import { CreateUserFormModel } from '../models/login-form.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    constructor(
        public readonly http: HttpClient
    ) {

    }

    public getUser(id: number): UserModel {
        // @TODO implement http get
        return JSON.parse(localStorage.getItem('loggedUsers'))
            .filter((user: UserModel) => user.id === id);
    }

    /**
     * createUser
     */
    public createUser(user: CreateUserFormModel): Observable<UserModel> {
        return this.http.post<UserModel>(`/api/newAccount`, user);
    }
}