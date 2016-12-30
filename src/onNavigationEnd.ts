import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Operator } from 'rxjs/Operator';
import { NavigationEnd, Event } from '@angular/router';

export function onNavigationEnd(this: Observable<Event>): Observable<NavigationEnd> {
  return this.lift(new OnNavigationEndOperator());
}

export class OnNavigationEndOperator implements Operator<Event, NavigationEnd> {

  call(subscriber: Subscriber<NavigationEnd>, source: Observable<Event>): any {
    return source.subscribe(new OnNavigationEndSubscriber(subscriber));
  }
}

class OnNavigationEndSubscriber extends Subscriber<Event> {

  constructor(destination: Subscriber<NavigationEnd>) {
    super(destination);
  }

  protected _next(value: Event) {
    try {
      if (value instanceof NavigationEnd) {
        this.destination.next(value);
      }
    } catch (err) {
      this.destination.error(err);
      return;
    }
  }
}