<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Flatten Array

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Flatten an array.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-flatten-array
```

</section>

<section class="usage">

## Usage

```javascript
var flattenArray = require( '@stdlib/utils-flatten-array' );
```

#### flattenArray( arr\[, options] )

Flattens an `array`.

```javascript
var arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];

var out = flattenArray( arr );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

The function accepts the following `options`:

-   **depth**: maximum depth to flatten.
-   **copy**: `boolean` indicating whether to deep [copy][@stdlib/utils/copy] `array` elements. Default: `false`.

To flatten to a specified depth, set the `depth` option.

```javascript
var arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];

var out = flattenArray( arr, {
    'depth': 2
});
// returns [ 1, 2, 3, [4, [5], 6], 7, 8, 9 ]

var bool = ( arr[1][1][1] === out[3] );
// returns true
```

To deep [copy][@stdlib/utils/copy] `array` elements, set the `copy` option to `true`.

```javascript
var arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];

var out = flattenArray( arr, {
    'depth': 2,
    'copy': true
});
// returns [ 1, 2, 3, [4, [5], 6], 7, 8, 9 ]

var bool = ( arr[1][1][1] === out[3] );
// returns false
```

#### flattenArray.factory( dims\[, options] )

Returns a `function` optimized for flattening `arrays` having specified dimensions.

```javascript
var flatten = flattenArray.factory( [ 3, 3 ] );

var arr = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];

var out = flatten( arr );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

arr = [
    [ 11, 12, 13 ],
    [ 14, 15, 16 ],
    [ 17, 18, 19 ]
];

out = flatten( arr );
// returns [ 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
```

The function accepts the following `options`:

-   **copy**: `boolean` indicating whether to deep [copy][@stdlib/utils/copy] `array` elements. Default: `false`.

To deep [copy][@stdlib/utils/copy] `array` elements, set the `copy` option to `true`.

<!-- eslint-disable object-curly-newline -->

```javascript
var flatten = flattenArray.factory( [ 3, 3 ], {
    'copy': true
});

var arr = [
    [ 1, 2, 3 ],
    [ 4, { 'x': 5 }, 6 ],
    [ 7, 8, 9 ]
];

var out = flatten( arr );
// returns [ 1, 2, 3, 4, {'x':5}, 6, 7, 8, 9 ]

var bool = ( arr[1][1] === out[4] );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A flatten `function` returned by the factory method does **not** validate that input `arrays` actually have the specified dimensions.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable array-bracket-spacing -->

<!-- eslint no-undef: "error" -->

```javascript
var flattenArray = require( '@stdlib/utils-flatten-array' );

var xStride;
var yStride;
var zStride;
var bool;
var tmp1;
var tmp2;
var arr;
var val;
var out;
var N;
var M;
var L;
var i;
var j;
var k;

N = 1000;
M = 100;
L = 10;

// Create an NxMxL (3D) array...
arr = new Array( N );
for ( i = 0; i < N; i++ ) {
    tmp1 = new Array( M );
    for ( j = 0; j < M; j++ ) {
        tmp2 = new Array( L );
        for ( k = 0; k < L; k++ ) {
            tmp2[ k ] = (M*L*i) + (j*L) + k + 1;
        }
        tmp1[ j ] = tmp2;
    }
    arr[ i ] = tmp1;
}
// Create a flattened (strided) array:
out = flattenArray( arr );

// To access the arr[4][20][2] element...
xStride = M * L;
yStride = L;
zStride = 1;
val = out[ (4*xStride) + (20*yStride) + (2*zStride) ];
// returns 4203

bool = ( arr[4][20][2] === val );
// returns true
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-flatten-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-flatten-array

[test-image]: https://github.com/stdlib-js/utils-flatten-array/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-flatten-array/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-flatten-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-flatten-array?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-flatten-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-flatten-array/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-flatten-array/main/LICENSE

[@stdlib/utils/copy]: https://github.com/stdlib-js/utils-copy

</section>

<!-- /.links -->
