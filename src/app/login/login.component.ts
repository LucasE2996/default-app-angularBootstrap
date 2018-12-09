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

  formModel: LoginFormModel;
  users: Array<UserModel>;

  constructor(
    public readonly loginService: LoginService,
    public readonly router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.formModel = {account: '', password: ''} as LoginFormModel
    this.users = JSON.parse(localStorage.getItem('loggedUsers'));
  }

  public login(): void {
    this.loginService.login(this.formModel);
    this.users = JSON.parse(localStorage.getItem('loggedUsers'));
  }

  public register(): void {
    this.router.navigateByUrl(``);
  }

  public isFormValid(): boolean {
    return this.formModel.account !== undefined && this.formModel.account !== '' &&
      this.formModel.password !== undefined && this.formModel.password !== ''
  }

  public goToHome(userId: number): void {
    this.router.navigateByUrl(`${userId}/main`);
    this.loginService.showMenuEvent.emit(true);
  }

  public openModal(): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }
}
