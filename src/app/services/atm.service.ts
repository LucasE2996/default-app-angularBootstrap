import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankNotesModel } from '../models/banknotes.model';
import { Observable } from 'rxjs';

@Injectable()
export class AtmService {

    constructor(
        public readonly http: HttpClient
    ) { }

    /**
     * Submmit new withdraw to ATM server.
     * 
     * @param accountId The account unique identifier which the withdraw will be done
     * @param vlaue The value of the withdraw
     */
    public submmitWithdraw(accountId: number, value: string): Observable<BankNotesModel> {
        return this.http.get<BankNotesModel>(`/withdraw/${accountId}`, {
            params: {
                value
            }
        });
    }
}