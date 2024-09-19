class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product, quantity) {
        this.products.push([product, quantity]);
    }

    removeProduct(product) {
        index = this.products.indexOf(product);
        this.products.splice(index, 1);
    }

    getTotalPrice() {
        sum = 0;
        for (let i = 0; i < this.products.length; i++) {
            sum += this.products[i].price;
        
        };
        return sum;
    }

    checkout() {
        for (let i = 0; i < this.products.length; i++){
            let product_name = this.products[i][0].name;
            let product_price = this.products[i][0].price;
            console.log(`Product '${product_name}' ${product_price}$ x${this.products[i][1]}`);
        }

        console.log(`Total price is: ${this.getTotalPrice()}`);
    }
}
