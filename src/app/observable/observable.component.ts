import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

  seconds: number = 0;
  counterSubscription!: Subscription;
  ngOnInit(): void {
      const counter = interval(1000)
      this.counterSubscription = counter.subscribe({
        next: (value) => { this.seconds = value; },
        error: (error) => { console.log(`Ooops! Error est survenu`, error); },
        complete: () => { console.log(`Observable est terminé`); }
      });

  }

  ngOnDestroy(): void {
      this.counterSubscription.unsubscribe();
  }


}
