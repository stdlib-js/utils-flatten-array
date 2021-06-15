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

var flattenArray = require( './../lib' );

var flatten;
var arr;
var out;

// Create a flatten function customized for flattening 3x3 arrays:
flatten = flattenArray.factory( [3, 3] );

arr = [
	[ 1, 2, 3 ],
	[ 4, 5, 6 ],
	[ 7, 8, 9 ]
];

out = flatten( arr );
console.log( out );
// => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
