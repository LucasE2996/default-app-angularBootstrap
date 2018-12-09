import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankNotesModel } from '../models/banknotes.model';
import { Observable } from 'rxjs';
import { BankModel } from '../models/bank.model';

@Injectable()
export class AtmService {

    constructor(
        private readonly http: HttpClient
    ) { }

    /**
     * Submmit new withdraw to ATM server.
     * 
     * @param accountNumber The account unique identifier which the withdraw will be done
     * @param vlaue The value of the withdraw
     */
    public submmitWithdraw(accountNumber: string, value: string): Observable<BankNotesModel> {
        return this.http.get<BankNotesModel>(`/api/atm/withdrawOperation/${accountNumber}`, {
            params: {
                value
            }
        });
    }

    /**
     * getAllBanks
     */
    public getAllBanks(): Observable<Array<BankModel>> {
        return this.http.get<Array<BankModel>>(`/api/bank/allBanks`);
    }
}