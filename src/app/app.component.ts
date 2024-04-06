import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { userService } from './services/user.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing';
  userAdded !: false;

  userServiceData! : Subscription;

  constructor(private authService: AuthService, private userServie: userService){

  }

  ngOnInit(){
    this.userServiceData = this.userServie.userAddedEvent.subscribe((data: any) =>{
      this.userAdded = data;
    })
  }

  ngOnDestroy(){
    this.userServiceData.unsubscribe();
  }

  onLoginClick(){
    this.authService.login();
  }

  onLogoutClick(){
    this.authService.logout();

  }
}
