import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  id: number;
  user: UserModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.user = this.userService.getUser(this.id);

        /* if (this.user == null) {
          this.router.navigate(['/cursos/error-404']);
        } */
      }
    );
  }

}
