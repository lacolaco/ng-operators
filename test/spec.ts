import { Observable } from 'rxjs/Rx';

import '../src/add/all';

import * as assert from 'assert';

interface Model {
    a: string;
}

describe('operators', () => {

    let source$: Observable<any>;

    describe('mapToResponseJson', () => {

        beforeEach(() => {
            source$ = Observable.of<any>({ json: () => ({a: 'a'} as Model)})
        });

        it('should map a value by `json()` method', (cb) => {
            source$.mapToResponseJson<Model>().subscribe(value => {
                assert.strictEqual(value.a, 'a');
            }, cb, cb);
        });
    });

    describe('mapToResponseText', () => {

        beforeEach(() => {
            source$ = Observable.of<any>({ text: () => "a" })
        });

        it('should map a value by `text()` method', (cb) => {
            source$.mapToResponseText().subscribe(value => {
                assert.strictEqual(value, 'a');
            }, cb, cb);
        });
    });
})