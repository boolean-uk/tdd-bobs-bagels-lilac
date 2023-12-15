const inventory = require('./inventory.js')

class Basket {
  constructor (capacity = 5) {
    this.basket = []
    this.basketSize = capacity
  }

  addItemToBasket (sku) {
    const product = inventory.find(item => item.sku === sku) || null

    if (this.basket.length === this.basketSize) {
      return `You cannot add more than ${this.basketSize} items to your basket!`
    }

    if (product) {
      this.basket.push(product)

      return this.basket
    }

    return 'Item does not exist in inventory'
  }

  removeItemFromBasket (sku) {
    for (let i = 0; i < this.basket.length; i++) {
      if (this.basket[i].sku === sku) {
        this.basket.splice(i, 1)
      }
    }
    return 'The item does not exist in your basket!'
  }

  getItemPrice (product) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].sku === product) {
        return `The price of the item is £${inventory[i].price}`
      }
    }
    return 'The product is not available'
  }

  showBasket () {
    return this.basket
  }

  getBasketTotal () {
    let totalPrice = 0
    for (let i = 0; i < this.basket.length; i++) {
      totalPrice += this.basket[i].price
    }
    return `The total price of the items in your basket is £${Number(
      totalPrice.toFixed(2)
    )}`
  }

  changeBasketSize (capacity) {
    if (capacity <= 25) {
      this.basketSize = capacity

      return true
    }

    return 'Maximum size of basket can be 25...'
  }
}

module.exports = Basket
