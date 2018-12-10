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
  public loading = false;

  public alert: Alert;

  constructor(
    public readonly activeModal: NgbActiveModal,
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    this.formModel = { } as CreateUserFormModel

    this.alert = {
      type: 'danger',
      message: 'Error',
      show: false
    };
  }

  public create(): void {
    this.loading = true;
    this.userService.createUser(this.formModel)
      .subscribe((user: UserModel) => {
        alert("SUCCESS!");
        this.close();
        this.loading = false;
      }, error => {
        this.alert.message = `Error: ${error.error.message}`
        this.alert.show = true;
        this.loading = false;
      }).add(() => this.close());
  }

  public validForm(): boolean {
    return this.formModel.accountNumber !== undefined && this.formModel.accountNumber !== '' &&
      this.formModel.accountOwner !== undefined && this.formModel.accountOwner !== '' &&
      this.formModel.accountBalance !== undefined &&
      this.formModel.accountPassword !== undefined && this.formModel.accountPassword !== '';
  }

  public close(): void {
    this.alert.show = false;
  }

}
