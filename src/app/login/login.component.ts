import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoginFormModel } from '../models/login-form.model';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel: LoginFormModel;
  users: Array<UserModel>;
  constructor(
    public readonly loginService: LoginService
  ) { }

  ngOnInit() {
    this.formModel = {account: '', password: ''} as LoginFormModel
    this.users = JSON.parse(localStorage.getItem('loggedUsers'));
  }

  public login(): void {
    this.loginService.login(this.formModel);
    this.users = JSON.parse(localStorage.getItem('loggedUsers'));
  }

  public isFormValid(): boolean {
    return this.formModel.account !== undefined && this.formModel.account !== '' &&
      this.formModel.password !== undefined && this.formModel.password !== ''
  }
}
