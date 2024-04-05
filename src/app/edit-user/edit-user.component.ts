import { Component } from '@angular/core';
import { IDeactivateGuard } from '../services/Guards/deactivate-guard-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements IDeactivateGuard {
  canExit(){
    if(confirm('Are you sure you want to Exit')){
      return true;
    }
    return false;
 
  }

 
}
