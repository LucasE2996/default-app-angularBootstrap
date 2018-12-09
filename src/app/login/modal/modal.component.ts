import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateUserFormModel } from 'src/app/models/login-form.model';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public formModel: CreateUserFormModel;

  constructor(
    private readonly activeModal: NgbActiveModal,
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    this.formModel = {
      accountNumber: '',
      owner: '',
      balance: 0,
      accountPassword: ''
    } as CreateUserFormModel
  }

  public create(): void {
    this.userService.createUser(this.formModel)
      .subscribe((user: UserModel) => user);
  }

}
