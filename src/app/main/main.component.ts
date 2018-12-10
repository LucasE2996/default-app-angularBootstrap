import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { LoginService } from '../services/login.service';
import { ActivatedRoute } from '@angular/router';
import { AtmService } from '../services/atm.service';
import { BankNotesModel } from '../models/banknotes.model';
import { BankModel } from '../models/bank.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public loading = false;
  public user: UserModel;
  public bankNotes: BankNotesModel;
  public withDrawValue: string;
  public banks: Array<BankModel>;
  public alert: Alert;

  constructor(
    private readonly loginService: LoginService,
    private readonly route: ActivatedRoute,
    private readonly atmService: AtmService
  ) {
    this.alert = {type: "danger"} as Alert
  }

  ngOnInit() {
    this.loading = true;
    let accountNumber: string;
    this.route.params.subscribe(params => {
      accountNumber = params['id']
      this.updateAccount(accountNumber);
    }, error => {
      this.alert.message = `Error: ${error.error.message}`
      this.alert.show = true;
      this.loading = false;
    });    
  }

  public submmitWithdraw(): void {
    this.loading = true;
    this.atmService.submmitWithdraw(this.user.accountNumber, this.withDrawValue).subscribe((bankNotes: BankNotesModel) => {
      this.updateAccount(this.user.accountNumber);
      this.bankNotes = bankNotes;
      this.loading = false;
    }, error => {
      this.alert.message = `Error: ${error.error.message}`
      this.alert.show = true;
      this.loading = false;
    });
  }

  public close(): void {
    this.alert.show = false;
  }

  private updateBanks(): void {
    this.loading = true;
    this.atmService.getAllBanks().subscribe((banks: Array<BankModel>) => {
      this.banks = banks;
      this.loading = false;
    }, error => {
      this.alert.message = `Error: ${error.error.message}`
      this.alert.show = true;
      this.loading = false;
    });
  }

  private updateAccount(accountNumber: string): void {
    this.loading = true;
    this.loginService.getLoggedUsers().subscribe((users: Array<UserModel>) => {
      this.user = users.filter((user: UserModel) => user.accountNumber === accountNumber)[0];
      this.updateBanks();
      this.loading = false;
    }, error => {
      this.alert.message = `Error: ${error.error.message}`
      this.alert.show = true;
      this.loading = false;
    });
  }
}
