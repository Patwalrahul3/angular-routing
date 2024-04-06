import { EventEmitter } from "@angular/core"
import { Subject } from "rxjs";

export class userService{

    // userAddedEvent = new EventEmitter<boolean>();
    userAddedEvent = new Subject<boolean>();

    getUser(id : string){

        if(id === '1'){
            return {
                'id': '2',
                'name': 'Simran'
            }

        }else{
            return {
                'id':'2',
                'name': 'krishna'
            }
        }


    }

    addUser(){
        // this.userAddedEvent.emit(true);
        this.userAddedEvent.next(true);
    }

}