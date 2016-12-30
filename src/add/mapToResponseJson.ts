import { Observable } from 'rxjs/Observable';
import { mapToResponseJson } from '../mapToResponseJson';

Observable.prototype.mapToResponseJson = mapToResponseJson;

declare module 'rxjs/Observable' {
    interface Observable<T> {
        mapToResponseJson: typeof mapToResponseJson;
    }
}
