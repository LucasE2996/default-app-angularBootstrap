import { NgModule } from "@angular/core";
import { UserService } from './user.service';
import { AtmService } from './atm.service';
import { LoginService } from './login.service';

@NgModule({
    declarations: [
    ],
    providers: [
        UserService,
        AtmService,
        LoginService
    ]
})
export class ServicesModule {}