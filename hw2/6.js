class Expression {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    evaluate() {}
    to_string() {}
}

class Addition extends Expression {
    evaluate() {
        return this.x + this.y;
    }

    to_string() {
        return `${this.x} + ${this.y} = ${this.evaluate()}`;
    }
}

class Subtraction extends Expression {
    evaluate() {
        return this.x - this.y;
    }
    to_string(){
        return `${this.x} - ${this.y} = ${this.evaluate()}`;
    }
}

class Multiplication extends Expression {
    evaluate() {
        return this.x * this.y;
    }
    to_string() {
        return `${this.x} * ${this.y} = ${this.evaluate()}`;
    }
}

class Division extends Expression {
    evaluate() {
        if (this.y === 0) {
            throw new Error('DivisionByZeroError');
        }
        return this.x / this.y;
    }
    to_string() {
        return `${this.x} / ${this.y} = ${this.evaluate()}`;
    }
}
