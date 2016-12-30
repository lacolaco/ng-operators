import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { NavigationStart, NavigationEnd, Event } from '@angular/router';

import '../src/add/all';

import * as assert from 'assert';

interface Model {
    a: string;
}

describe('operators', () => {

    let source$: Observable<any>;

    describe('mapToResponseJson', () => {

        beforeEach(() => {
            source$ = Observable.of<Response>({ json: () => ({ a: 'a' } as Model) } as Response)
        });

        it('should map a value by `json()` method', (cb) => {
            source$.mapToResponseJson<Model>().subscribe(value => {
                assert.strictEqual(value.a, 'a');
            }, cb, cb);
        });
    });

    describe('mapToResponseText', () => {

        beforeEach(() => {
            source$ = Observable.of<Response>({ text: () => "a" } as Response)
        });

        it('should map a value by `text()` method', (cb) => {
            source$.mapToResponseText().subscribe(value => {
                assert.strictEqual(value, 'a');
            }, cb, cb);
        });
    });

    describe('onNavigationEnd', () => {

        beforeEach(() => {
            source$ = Observable.from<Event>([
                new NavigationStart(1, "/"),
                new NavigationEnd(2, "/", "/"),
            ]);
        });

        it('should take only NavigationEnd', (cb) => {
            source$.onNavigationEnd().count().subscribe(value => {
                assert.strictEqual(value, 1);
            }, cb, cb);
        });
    });
})