class Customer {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(customer) {
        this.orders = [];
        this.customer = customer;
    }

    addProduct(product, quantity) {
        this.orders.push([product, quantity]);
    }

    calculateTotal() {
        let ans = 0;
        for (let i = 0; i < this.orders.length; i++) {
            ans += this.orders[i][0].price * this.orders[i][1];
        }
        return ans;
    }

    printOrder() {
        console.log(`Customer '${this.customer.username}':`);
        for (let i = 0; i < this.orders.length; i++) {
            console.log(`Product '${this.orders[i][0].name}' ${this.orders[i][0].price}; count: ${this.orders[i][1]}; total: ${this.orders[i][0].price*this.orders[i][1]}`);
        }
    }
}

