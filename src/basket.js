const { inventory, fetchItemFromInventory } = require("./inventory.js");

class Basket {
    constructor() {
        this.basket = [];
        this.basketSize = 5;
    };
    
    addItemToBasket(sku) {
        if (this.isFull()) {
            return 'You cannot add more than 5 items to your basket!'
        }

        this.basket.push(fetchItemFromInventory(sku))
        return true
    };

    isFull () {
        return this.basket.length >= this.basketSize
    }

    changeBasketSize (newSize) {
        if (this.basket.length < newSize) {
            console.log("You have more items in the basket than fit the new size")
            this.basket = this.basket.slice(0, newSize)
        }
        this.basketSize = newSize
    }

    removeItemFromBasket(sku) {
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i].sku === sku) {
                this.basket.splice(i, 1)
            }
        }
        return 'The item does not exist in your basket!'
    }

    getItemPrice(product) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].sku === product) {
                return `The price of the item is £${inventory[i].price}`
            }
        }
        return 'The product is not available'
    }

    showBasket() {
        return this.basket
    }

    getBasketTotal() {
        let totalPrice = 0;
        for (let i = 0; i < this.basket.length; i++) {
            totalPrice += this.basket[i].price
        }
        return `The total price of the items in your basket is £${Number(totalPrice.toFixed(2))}`
    }
};

module.exports = Basket;
