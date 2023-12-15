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
    const product = this.basket.find(item => item.sku === sku) || null

    if (product) {
      this.basket = this.basket.filter(item => item.sku !== sku)

      return true
    }

    return 'The item does not exist in your basket!'
  }

  getItemPrice (sku) {
    const product = inventory.find(item => item.sku === sku) || null

    if (product) {
      return `The price of the item is £${product.price}`
    }

    return 'The product is not available'
  }

  showBasket () {
    return this.basket
  }

  getBasketTotal () {
    const sum = this.basket.map(item => item.price).reduce((a, b) => a + b, 0)

    return `The total price of the items in your basket is £${Number(
        sum.toFixed(2)
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
