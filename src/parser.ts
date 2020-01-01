/**
 * Generic parser of strings
 */
class Parser {
    input: string
    index: number
    line: number
    col: number
    /**
     * 
     * @param content the string content
     */
    constructor(content: string) {
        this.input = content
        this.index = 0

        this.line = 1
        this.col = 0
    }

    error(): string {
        let errorString = this.input.substring(this.index - 15, this.index)
        errorString += "{" + this.input.charAt(this.index)
        errorString += "}" + this.input.substring(this.index + 1, this.index + 15)
        return `error on line ${this.line}: "${errorString}"`
    }

    /**
     * Return the next character without advancing.
     * @returns the next character
     */
    peek(): string {
        return this.input.charAt(this.index)
    }

    /**
     * Consume the next character in `this.input`
     * @returns the next character
     */
    consume(): string {
        if (this.hasNext()) {
            let res = this.peek()
            this.index++
            if (res == "\n") {
                this.line++
                this.col = 0
            } else {
                this.col++
            }
            return res
        } else {
            return ""
        }
    }

    // Does the parser have more characters to consume?
    hasNext(): boolean {
        return this.index < this.input.length
    }

    // Does the current input start with the given string?
    startsWith(s: string): boolean {
        let result = true
        if (this.index + s.length > this.input.length) {
            result = false
        } else {
            let compare = this.input.slice(this.index, this.index + s.length)
            if (compare != s) {
                result = false
            }
        }
        return result
    }

    // Consume characters until test returns false.
    consumeWhile(test: Function): string {
        let result = ""
        while (this.hasNext() && test(this.peek())) {
            result += this.consume()
        }
        return result
    }

    // Consume whitespace.
    consumeWhitespace(): string {
        return this.consumeWhile((char: string) => {
            return ' \t\n\r\v'.indexOf(char) >= 0
        })
    }

}

export { Parser }