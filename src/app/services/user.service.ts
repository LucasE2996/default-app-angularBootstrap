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

    /**
     * Creates a new user.
     */
    public createUser(user: CreateUserFormModel): Observable<UserModel> {
        return this.http.post<UserModel>(`/api/atm/newAccount`, user);
    }
}