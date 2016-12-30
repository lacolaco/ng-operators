# ng-operators
[![npm version](https://badge.fury.io/js/ng-operators.svg)](https://badge.fury.io/js/ng-operators)
[![CircleCI](https://circleci.com/gh/laco0416/ng-operators.svg?style=svg)](https://circleci.com/gh/laco0416/ng-operators)

RxJS operators for Angular

## Install

```
$ npm install --save ng-operators
```

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
