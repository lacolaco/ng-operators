import { Observable } from 'rxjs/Observable';
import { mapToResponseText } from '../mapToResponseText';

Observable.prototype.mapToResponseText = mapToResponseText;

declare module 'rxjs/Observable' {
    interface Observable<T> {
        mapToResponseText: typeof mapToResponseText;
    }
}
