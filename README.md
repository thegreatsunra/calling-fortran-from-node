## calling-fortran-from-node 0.0.0

I _literally_ have no idea what I'm doing.

## Motivation

This is a proof-of-concept to see if I could figure out how to call Fortran from within Node. The answer is yes. Barely.

## Installation

* Install [Node](http://nodejs.org)
* Install [GFortran](http://gcc.gnu.org/wiki/GFortranBinaries)
* Download this project
* Open a command line at this project and run `npm install` to install all local dependencies
* (it probably wouldn't hurt to try and run this directly from my computer, considering I haven't tested to see whether it works in any other context)

## Usage

Run the C++ example, which is fine and pulled directly from the [Node Addons](http://nodejs.org/api/addons.html) documentation:

```
$ node hello_c.js
```

Run the Fortran example, which is awful and uses `.exec()` which is probably a bad idea:

```
$ node hello_fortran.js
```

## Contributing

I encourage you to protect me from myself.

## MIT License

The MIT License (MIT)

Copyright (c) 2014 Dane Petersen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
