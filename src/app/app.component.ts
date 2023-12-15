import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'marketPalce TP ';

  constructor(){
    const subject = new Subject<number>();

  subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`),
  });

  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`),
  });

  subject.next(1);
  subject.next(2);
  }
}
