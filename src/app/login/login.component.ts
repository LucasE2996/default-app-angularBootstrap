import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoginFormModel } from '../models/login-form.model';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = false;
  public formModel: LoginFormModel;
  public users: Array<UserModel>;
  public alert: Alert;

  constructor(
    public readonly loginService: LoginService,
    public readonly router: Router,
    private modalService: NgbModal
  ) {
    this.formModel = {accountNumber: '', accountPassword: ''} as LoginFormModel
    this.alert = {
      type: 'danger',
      message: 'Error',
      show: false
    };
    this.users = []
  }

  ngOnInit() { }

  public login(): void {
    this.loading = true;
    this.loginService.login(this.formModel).subscribe((user: UserModel) => {
      this.users.push(user);
      this.loginService.showMenu(true);
      this.goToHome(user.accountNumber);
      this.loading = false;
    }, error => {
      this.alert.message = `Error: ${error.message}`
      this.alert.show = true;
      this.loading = false;
    });
  }

  public isFormValid(): boolean {
    return this.formModel.accountNumber !== undefined && this.formModel.accountNumber !== '' &&
      this.formModel.accountPassword !== undefined && this.formModel.accountPassword !== ''
  }

  public goToHome(accountNumber: string): void {
    this.router.navigateByUrl(`${accountNumber}/main`);
    this.loginService.showMenuEvent.emit(true);
  }

  public openModal(): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  public close(): void {
    this.alert.show = false;
  }
}
