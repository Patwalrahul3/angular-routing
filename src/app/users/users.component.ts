import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private router: Router,  private userService: userService){

  }
  

  onUserAddedClick(){
    this.userService.addUser();


  }




  navigate(){

    // this.router.navigateByUrl('/categories')
    this.router.navigate(['/categories'])

  }
}
