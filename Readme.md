# Extensible Parser
[HTMLParser](https://github.com/MH15/html-parser)'s extensible string parsing class written in
[Typescript](https://typescriptlang.org) 

## Install
Parser is available on [npm](https://npmjs.com/package/extensible-parser).
```bash
npm install extensible-parser
```

## Usage
```javascript
import {Parser} from "extensible-parser"
let stringData = "some stuff"
const parser = new Parser(stringData)

while(parser.hasNext()) {
    let char = parser.consume()
    console.log(char)
}

```

## Documentation
See the example above or the [wiki](https://github.com/MH15/extensible-parser).



## Development
This module was originally developed for the
[Neanderthal](https://github.com/MH15/neanderthal) web framework, and is used
directly in the [HTMLParser](https://github.com/MH15/html-parser) library.

Contributions are welcome! However- this library is designed to provide
the most primitive functionality needed for a complete string library. Most new
features should be delegated to a separate library that extends the `Parser`
class.

This parser was inspired by [Matt Brubeck](https://github.com/mbrubeck/)'s [HTML
parser](https://limpet.net/mbrubeck/2014/08/11/toy-layout-engine-2.html). Thanks!

## Projects using Parser
These libraries directly extend the `Parser` class:
- HTMLParser
