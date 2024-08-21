import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { increment, decrement, reset, initialValue} from '../store/counter.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentCount } from '../selector/counters.selector';


@Component({
  selector: 'app-display',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  count$!: Observable<number>;

  initialStatenum!: number;

  constructor(public store: Store<{ count: number }>) {}

  ngOnInit() {
    this.count$ = this.store.select(getCurrentCount);
  }

  setInitialNum(event: any): void {
    const target = event.target as HTMLInputElement;
   this.store.dispatch(initialValue({num: Number(target.value)}))
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
