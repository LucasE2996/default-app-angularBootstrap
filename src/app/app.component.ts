import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public showMenu: boolean;

  public loggedUsers: Array<UserModel>;

  constructor(
    public readonly userService: UserService,
    public readonly loginService: LoginService,
    public readonly router: Router,
    public readonly route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.loginService.showMenuEvent.subscribe(show => this.showMenu = show);
  }

  public navigateToHome(): void {
    this.router.navigateByUrl(`${this.getCurrentId}/main`);
  }

  private getCurrentId(): number {
    let id: number;
    this.route.params.subscribe((params: any) => id = params['id']);
    return id;
  }
}
