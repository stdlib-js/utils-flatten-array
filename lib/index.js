/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Flatten an array.
*
* @module @stdlib/utils-flatten-array
*
* @example
* var flattenArray = require( '@stdlib/utils-flatten-array' );
*
* var arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];
*
* var out = flattenArray( arr );
* // returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
*
* @example
* var flattenArray = require( '@stdlib/utils-flatten-array' );
*
* var flatten = flattenArray.factory( [2,2], {
*     'copy': false
* });
*
* var out = flatten( [[1,2],[3,4]] );
* // returns [ 1, 2, 3, 4 ]
*
* out = flatten( [[5,6],[7,8]] );
* // returns [ 5, 6, 7, 8 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
