import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import {
  increment,
  decrement,
  reset,
  initialValue,
} from '../store/counter.actions';
import { addToHistory,clearHistory} from '../store/counterHistory.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../selector/selectors.selector';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  count$!: Observable<number>;
  countHistory$!: Observable<number[]>;

  constructor(public store: Store<AppState>) {}

  ngOnInit() {
    this.count$ = this.store.select('count');
    this.countHistory$ = this.store.select('history');
  }



  setInitialNum(event: any): void {
    const target = event.target as HTMLInputElement;
    this.store.dispatch(initialValue({ num: Number(target.value) }));
  }

  

  increment() {
    this.store.dispatch(increment());
    this.store.select('count').subscribe(count => {
      this.store.dispatch(addToHistory({ count }));
    });
  }

  decrement() {
    this.store.dispatch(decrement());
    this.store.select('count').subscribe(count => {
      this.store.dispatch(addToHistory({ count }));
    });
  }

  reset() {
    this.store.dispatch(reset());
    this.store.dispatch(clearHistory());
  }
}
