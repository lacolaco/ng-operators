# ng-operators

RxJS operators for Angular

## Usage

* Import all operators

```ts
import 'ng-operators/add/all';

response$.mapToResponseJson().subscribe(...);
```

* Import single operator

```ts
import 'ng-operators/add/mapToResponseJson';

response$.mapToResponseJson().subscribe(...);
```

* Import single operator as a function

```ts
import { mapToResponseJson } from 'ng-operators/mapToResponseJson';

mapToResponseJson.call(response$).subscribe(...);
```

## Operators

### `mapToResponseJson<R>`

Input: `Observable<http.Response>`
Output: `Observable<R>`

A shorthand of `.map(resp => resp.json() as R)`

### `mapToResponseText`

Input: `Observable<http.Response>`
Output: `Observable<string>`

A shorthand of `.map(resp => resp.text())`

### `onNavigationEnd`

Input: `Observable<router.Event>`
Output: `Observable<router.NavigationEnd>`

A shorthand of `router.events.filter(e => e instanceof NavigationEnd)`

## License
MIT
