import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Operator } from 'rxjs/Operator';
import { Response } from '@angular/http';

export function mapToResponseJson<R>(this: Observable<Response>): Observable<R> {
  return this.lift(new MapToResponseJsonOperator<R>());
}

export class MapToResponseJsonOperator<R> implements Operator<Response, R> {

  call(subscriber: Subscriber<R>, source: Observable<Response>): any {
    return source.subscribe(new MapToResponseJsonSubscriber(subscriber));
  }
}

class MapToResponseJsonSubscriber<R> extends Subscriber<Response> {

  constructor(destination: Subscriber<R>) {
    super(destination);
  }

  protected _next(value: Response) {
    let result: any;
    try {
      result = value.json();
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(result);
  }
}