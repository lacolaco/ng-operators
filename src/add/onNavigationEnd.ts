import { Observable } from 'rxjs/Observable';
import { onNavigationEnd } from '../onNavigationEnd';

Observable.prototype.onNavigationEnd = onNavigationEnd;

declare module 'rxjs/Observable' {
    interface Observable<T> {
        onNavigationEnd: typeof onNavigationEnd;
    }
}
