import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment,decrement,reset } from './counter.actions';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent
{
  count$: any;
             
  constructor(private store: Store<{ count: number }>)
  {
    this.count$ = store.select('count');
  }
  public currentCount = 0;

  increment()
  {
    this.store.dispatch(increment());
  }
  decrement()
  {
    this.store.dispatch(decrement());
  }
  
  reset()
  {
    this.store.dispatch(reset());
  }
 
  public incrementCounter()
  {
    this.currentCount++;
  }
}