import { Component } from '@angular/core';
import { IDeactivateGuard } from '../services/Guards/deactivate-guard-service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements IDeactivateGuard {

  user!: {id: string, name: string};
  editUser!: {id: string, name: string};
  constructor(private route: ActivatedRoute){ }


  ngOnInit(){

    this.route.data.subscribe((data) =>{
      console.log(data);
      this.user = {
        id: data['user']['id'],
        name: data['user']['name'],
      }

      this.editUser= {... this.user}
    })


    // this.route.params.subscribe((data: Params) =>{
    //   this.user = {
    //     id: data['id'],
    //     name: data['name']
    //   }

    //   this.editUser = {... this.user}
    // })

  }

  

  canExit(){
    if(this.user.id !== this.editUser.id || this.user.name !== this.editUser.name){
      if(confirm('Are you sure you want to Exit, your data will lost')){
        return true;
      }else{
        return false;
      }
    }
    
    return true;
 
  }

 
}
