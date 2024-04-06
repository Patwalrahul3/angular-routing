import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  intervalSubscription !: Subscription

  constructor(){}

  ngOnInit(){

    this.intervalSubscription = interval(1000).subscribe((count) => console.log(count))

  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();

  }

}
