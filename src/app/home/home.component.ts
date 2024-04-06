import { Component } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  intervalSubscription !: Subscription

  constructor(){}

  ngOnInit(){

    // this.intervalSubscription = interval(1000).subscribe((count) => console.log(count))

    // custom Observable
    let customObservable = Observable.create((observer: any) =>{
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        count++;
      },1000)
    })

    this.intervalSubscription =   customObservable.subscribe((data: any) => console.log(data))

  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();

  }

}
