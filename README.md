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

Input: `Observable<Response>`
Output: `Observable<T>`

Shorthand of `.map(resp => resp.json() as Model)`


## License
MIT
