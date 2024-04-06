import { Component } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  intervalSubscription!: Subscription;

  constructor() {}

  ngOnInit() {
    // this.intervalSubscription = interval(1000).subscribe((count) => console.log(count))

    // custom Observable
    let customObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count > 3) {
          observer.error('count is greater than 3');
        }

        if(count > 2){
          observer.complete();

        }
        count++;
      }, 1000);
    });

    this.intervalSubscription = customObservable.pipe(map((data : number) =>{
      //  return 'count is' + (data * 2)
       return `count is ${data * 2} `
    })).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }, () =>{
        console.log("completed.....");
        
      }
    );
  }

  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }
}
