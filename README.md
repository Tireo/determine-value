# determineValue

Extremely simple helper to determine first defined value.

It is basically a wrapper for "or chains" that treats null and 0 as set values instead of "falsy" which is helpful in setting default values:

    /* x is defined somewhere */;
    let a = x || 1;  //or similar longer chains

The problem with those is that they don't work when you want falsy values (for example: 0, "", null, false) to be treated as proper values.

That is why determineValue was created. 

It basically returns first defined argument that is passed to it or undefined if one cannot be found.

It hardly has any code in itself but maybe someone will prefer to have it as an easy dependency instead of writing it from scratch in each project. (just like me)

## Installation

To install **determineValue** in your node project just run this command:

```
npm i determineValue
```

## Usage

    let determineValue = require('determineValue');
    
    let a, b, c = 1;
    
    let i = determineValue(a, b, c); //returns 1

or more commonly to determine default function argument values:

    let determineValue = require('determineValue');
        
    let someFn = function(a, b, c){
        a = determineValue(a, 1); //set a to 1 if it's undefined
        b = determineValue(b, a+1, false);
    }

## Licence

ISC License

Copyright (c) 2017, Łukasz Drożdż

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.