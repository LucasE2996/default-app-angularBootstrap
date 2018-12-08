import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'default-app';

  public loggedUsers: Array<UserModel>;

  constructor(
    public readonly userService: UserService
  ) { }

  public ngOnInit(): void {
    
  }
}
