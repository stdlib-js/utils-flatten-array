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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# flattenArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Flatten an array.



<section class="usage">

## Usage

```javascript
import flattenArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-flatten-array@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-flatten-array/tags). For example,

```javascript
import flattenArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-flatten-array@v0.2.2-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-flatten-array@esm/index.mjs';
```

#### flattenArray( arr\[, options] )

Flattens an array.

```javascript
var arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];

var out = flattenArray( arr );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

The function accepts the following `options`:

-   **depth**: maximum depth to flatten.
-   **copy**: `boolean` indicating whether to deep [copy][@stdlib/utils/copy] array elements. Default: `false`.

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

To deep [copy][@stdlib/utils/copy] array elements, set the `copy` option to `true`.

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

Returns a `function` optimized for flattening arrays having specified dimensions.

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

-   **copy**: `boolean` indicating whether to deep [copy][@stdlib/utils/copy] array elements. Default: `false`.

To deep [copy][@stdlib/utils/copy] array elements, set the `copy` option to `true`.

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
-   The `factory` method uses code evaluation, which may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable array-bracket-spacing -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import flattenArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-flatten-array@esm/index.mjs';

function tensor( N, M, L ) {
    var tmp1;
    var tmp2;
    var out;
    var i;
    var j;
    var k;

    out = [];
    for ( i = 0; i < N; i++ ) {
        tmp1 = [];
        for ( j = 0; j < M; j++ ) {
            tmp2 = [];
            for ( k = 0; k < L; k++ ) {
                tmp2.push( (M*L*i) + (j*L) + k + 1 );
            }
            tmp1.push( tmp2 );
        }
        out.push( tmp1 );
    }
    return out;
}

// Define array dimensions:
var N = 1000;
var M = 100;
var L = 10;

// Create a 3-dimensional nested array:
var data = tensor( N, M, L );

// Create a flattened (strided) array from a 3-dimensional nested array:
var arr = flattenArray( data );

// To access the data[4][20][2] element...
var xStride = M * L;
var yStride = L;
var zStride = 1;
var v = arr[ (4*xStride) + (20*yStride) + (2*zStride) ];
// returns 4203

var bool = ( data[4][20][2] === v );
// returns true

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-flatten-object`][@stdlib/utils/flatten-object]</span><span class="delimiter">: </span><span class="description">flatten an object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-flatten-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-flatten-array

[test-image]: https://github.com/stdlib-js/utils-flatten-array/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/utils-flatten-array/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-flatten-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-flatten-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-flatten-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-flatten-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-flatten-array/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-flatten-array/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-flatten-array/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-flatten-array/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-flatten-array/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-flatten-array/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-flatten-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-flatten-array/main/LICENSE

[@stdlib/utils/copy]: https://github.com/stdlib-js/utils-copy/tree/esm

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

<!-- <related-links> -->

[@stdlib/utils/flatten-object]: https://github.com/stdlib-js/utils-flatten-object/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
