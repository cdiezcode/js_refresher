class Range {
    constructor(from, to) {
        this.from = from
        this.to = to
    }

    [Symbol.iterator]() {
        return {
            current: this.from,
            limit: this.to,
            next() {
                if (this.current < this.limit) {
                    return {value: this.current++, done: false}
                }
                return {done: true}
            }
        }
    }
}

module.exports = Range;