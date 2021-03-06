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

// MODULES //

var copy = require( '@stdlib/utils-copy' );
var isArrayLikeObject = require( '@stdlib/assert-is-array-like-object' );
var format = require( '@stdlib/string-format' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var recurse = require( './recurse.js' );


// MAIN //

/**
* Flattens an array.
*
* @param {ArrayLikeObject} arr - input array
* @param {Options} [options] - function options
* @param {NonNegativeInteger} [options.depth] - maximum depth to flatten
* @param {boolean} [options.copy=false] - boolean indicating whether to deep copy array elements
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Array} flattened array
*
* @example
* var arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];
*
* var out = flattenArray( arr );
* // returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
*/
function flattenArray( arr, options ) {
	var opts;
	var err;
	var out;
	if ( !isArrayLikeObject( arr ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', arr ) );
	}
	opts = {
		'copy': defaults.copy,
		'depth': defaults.depth
	};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.depth === 0 ) {
		out = arr;
	} else {
		out = recurse( [], arr, opts.depth );
	}
	if ( opts.copy ) {
		return copy( out );
	}
	return out;
}


// EXPORTS //

module.exports = flattenArray;
