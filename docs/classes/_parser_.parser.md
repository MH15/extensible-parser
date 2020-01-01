[extensible-parser - v1.0.0](../README.md) › [Globals](../globals.md) › ["parser"](../modules/_parser_.md) › [Parser](_parser_.parser.md)

# Class: Parser

Generic parser of strings

## Hierarchy

* **Parser**

## Index

### Constructors

* [constructor](_parser_.parser.md#constructor)

### Properties

* [col](_parser_.parser.md#col)
* [index](_parser_.parser.md#index)
* [input](_parser_.parser.md#input)
* [line](_parser_.parser.md#line)

### Methods

* [consume](_parser_.parser.md#consume)
* [consumeWhile](_parser_.parser.md#consumewhile)
* [consumeWhitespace](_parser_.parser.md#consumewhitespace)
* [error](_parser_.parser.md#error)
* [hasNext](_parser_.parser.md#hasnext)
* [peek](_parser_.parser.md#peek)
* [startsWith](_parser_.parser.md#startswith)

## Constructors

###  constructor

\+ **new Parser**(`content`: string): *[Parser](_parser_.parser.md)*

*Defined in [parser.ts:8](https://github.com/MH15/extensible-parser/blob/4b77834/src/parser.ts#L8)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | string | the string content  |

**Returns:** *[Parser](_parser_.parser.md)*

## Properties

###  col

• **col**: *number*

*Defined in [parser.ts:8](https://github.com/MH15/extensible-parser/blob/4b77834/src/parser.ts#L8)*

___

###  index

• **index**: *number*

*Defined in [parser.ts:6](https://github.com/MH15/extensible-parser/blob/4b77834/src/parser.ts#L6)*

___

###  input

• **input**: *string*

*Defined in [parser.ts:5](https://github.com/MH15/extensible-parser/blob/4b77834/src/parser.ts#L5)*

___

###  line

• **line**: *number*

*Defined in [parser.ts:7](https://github.com/MH15/extensible-parser/blob/4b77834/src/parser.ts#L7)*

## Methods

###  consume

▸ **consume**(): *string*

*Defined in [parser.ts:40](https://github.com/MH15/extensible-parser/blob/4b77834/src/parser.ts#L40)*

Consume the next character in `this.input`

**Returns:** *string*

the next character

___

###  consumeWhile

▸ **consumeWhile**(`test`: Function): *string*

*Defined in [parser.ts:76](https://github.com/MH15/extensible-parser/blob/4b77834/src/parser.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`test` | Function |

**Returns:** *string*

___

###  consumeWhitespace

▸ **consumeWhitespace**(): *string*

*Defined in [parser.ts:85](https://github.com/MH15/extensible-parser/blob/4b77834/src/parser.ts#L85)*

**Returns:** *string*

___

###  error

▸ **error**(): *string*

*Defined in [parser.ts:21](https://github.com/MH15/extensible-parser/blob/4b77834/src/parser.ts#L21)*

**Returns:** *string*

___

###  hasNext

▸ **hasNext**(): *boolean*

*Defined in [parser.ts:57](https://github.com/MH15/extensible-parser/blob/4b77834/src/parser.ts#L57)*

**Returns:** *boolean*

___

###  peek

▸ **peek**(): *string*

*Defined in [parser.ts:32](https://github.com/MH15/extensible-parser/blob/4b77834/src/parser.ts#L32)*

Return the next character without advancing.

**Returns:** *string*

the next character

___

###  startsWith

▸ **startsWith**(`s`: string): *boolean*

*Defined in [parser.ts:62](https://github.com/MH15/extensible-parser/blob/4b77834/src/parser.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *boolean*
