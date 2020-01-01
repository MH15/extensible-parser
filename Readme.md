# String Parser
[HTMLParser](https://github.com/MH15/html-parser)'s extensible string parsing class written in
[Typescript](https://typescriptlang.org) 

## Install
```bash
npm install stringparser
```

## Usage
```javascript
import {Parser} from "StringParser"
let stringData = "some stuff"
const parser = new Parser(stringData)

while(parser.hasNext()) {
    let char = parser.consume()
    console.log(char)
}

```

## Documentation
See the example above or the [wiki](https://github.com/MH15/string-parser).



## Development
This module was originally developed for the
[Neanderthal](https://github.com/MH15/neanderthal) web framework, and is used
directly in the [HTMLParser](https://github.com/MH15/html-parser) library.

Contributions are welcome! However- this library is designed to provide
the most primitive functionality needed for a complete string library. Most new
features should be delegated to a separate library that extends the `StringParser`
class.

## Projects using StringParser
These libraries directly extend the `StringParser` class:
- HTMLParser
