import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Operator } from 'rxjs/Operator';
import { Response } from '@angular/http';

export function mapToResponseText(this: Observable<Response>): Observable<string> {
  return this.lift(new MapToResponseTextOperator());
}

export class MapToResponseTextOperator implements Operator<Response, string> {

  call(subscriber: Subscriber<string>, source: Observable<Response>): any {
    return source.subscribe(new MapToResponseTextSubscriber(subscriber));
  }
}

class MapToResponseTextSubscriber extends Subscriber<Response> {

  constructor(destination: Subscriber<string>) {
    super(destination);
  }

  protected _next(value: Response) {
    let result: any;
    try {
      result = value.text();
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(result);
  }
}