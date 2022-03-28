const Basket = require("../src/basket.js");
const Bagel = require("../src/bagel.js");

describe("Basket", () => {
  let basket;

  beforeEach(() => {
    basket = new Basket();
  });

  it("create and add a item to the basket", () => {
    const expected = [
      {
        sku: "BGLO",
        price: 0.49,
        name: "Bagel",
        variant: "Onion",
      },
    ];
    basket.addItemToBasket("BGLO");
    const result = basket.showBasket();
    expect(result).toEqual(expected);
  });

  it("a user can add more than one item to the basket", () => {
    const expected = [
      {
        sku: "BGLO",
        price: 0.49,
        name: "Bagel",
        variant: "Onion",
      },
      {
        sku: "BGLP",
        price: 0.39,
        name: "Bagel",
        variant: "Plain",
      },
    ];
    basket.addItemToBasket("BGLO");
    basket.addItemToBasket("BGLP");
    const result = basket.showBasket();
    expect(result).toEqual(expected);
  });

  it("a user can remove one item from the basket", () => {
    const expected = [
      {
        sku: "BGLP",
        price: 0.39,
        name: "Bagel",
        variant: "Plain",
      },
    ];
    basket.addItemToBasket("BGLO");
    basket.addItemToBasket("BGLP");
    basket.removeItemFromBasket("BGLO");
    const result = basket.showBasket();
    expect(result).toEqual(expected);
  });

  it("a user can remove more than one item from the basket", () => {
    const expected = [
      {
        sku: "BGLP",
        price: 0.39,
        name: "Bagel",
        variant: "Plain",
      },
      {
        sku: "BGLE",
        price: 0.49,
        name: "Bagel",
        variant: "Everything",
      },
    ];
    basket.addItemToBasket("BGLO");
    basket.addItemToBasket("BGLP");
    basket.addItemToBasket("BGLE");
    basket.addItemToBasket("BGLS");
    basket.removeItemFromBasket("BGLO");
    basket.removeItemFromBasket("BGLS");
    const result = basket.showBasket();
    expect(result).toEqual(expected);
  });

  it("a user cannot add more than 5 items to their basket", () => {
    const expected = "You cannot add more than 5 items to your basket!";
    basket.addItemToBasket("BGLO");
    basket.addItemToBasket("BGLP");
    basket.addItemToBasket("BGLE");
    basket.addItemToBasket("BGLS");
    basket.addItemToBasket("BGSS");
    const result = basket.addItemToBasket("BGSE");
    expect(result).toEqual(expected);
  });

  // Comment is too long.
  // Instead of showing an error, we can use boolean.
  it("if the user tries to add more than 5 items, the basket will be full, the overfill will be discarded and an error message will be displayed", () => {
    const expected = [
      {
        sku: "BGLO",
        price: 0.49,
        name: "Bagel",
        variant: "Onion",
      },
      {
        sku: "BGLP",
        price: 0.39,
        name: "Bagel",
        variant: "Plain",
      },
      {
        sku: "BGLE",
        price: 0.49,
        name: "Bagel",
        variant: "Everything",
      },
      {
        sku: "BGLS",
        price: 0.49,
        name: "Bagel",
        variant: "Sesame",
      },
      {
        sku: "BGSE",
        price: 2.99,
        name: "Bagel Sandwich",
        variant: "Everything",
      },
    ];
    // I would use a for loop to add these 6 bagels because code here is repetitive.
    basket.addItemToBasket("BGLO");
    basket.addItemToBasket("BGLP");
    basket.addItemToBasket("BGLE");
    basket.addItemToBasket("BGLS");
    basket.addItemToBasket("BGSE");
    basket.addItemToBasket("BGLO");
    const result = basket.showBasket("BGSE");
    expect(result).toEqual(expected);
  });

  // Refactoring isBasketFull()?
  it("is basket full?", () => {
    //set up
    const basket = new Basket();
    const bagel = new Bagel("BGLG");
    //execute
    basket.addItemToBasket("BGLO");
    basket.addItemToBasket("BGLP");
    basket.addItemToBasket("BGLE");
    basket.addItemToBasket("BGLS");
    basket.addItemToBasket("BGSE");
    basket.addItemToBasket("BGLO");
    const result = basket.isBasketFull();
    expect(result).toEqual(true);
  });
  // End of refactoring

  it("a user cannot remove an item that does not exist from the basket", () => {
    const expected = "The item does not exist in your basket!";
    basket.addItemToBasket("BGLO");
    basket.addItemToBasket("BGLP");
    basket.addItemToBasket("BGLE");
    const result = basket.removeItemFromBasket("BGLS");
    expect(result).toEqual(expected);
  });

  it("Bob's bagel manager can create baskets with larger capacity", () => {
    const expected = [
      {
        sku: "BGLO",
        price: 0.49,
        name: "Bagel",
        variant: "Onion",
      },
      {
        sku: "BGLP",
        price: 0.39,
        name: "Bagel",
        variant: "Plain",
      },
      {
        sku: "BGLE",
        price: 0.49,
        name: "Bagel",
        variant: "Everything",
      },
      {
        sku: "BGLS",
        price: 0.49,
        name: "Bagel",
        variant: "Sesame",
      },
      {
        sku: "BGSE",
        price: 2.99,
        name: "Bagel Sandwich",
        variant: "Everything",
      },
      {
        sku: "BGSS",
        price: 4.99,
        name: "Bagel Sandwich",
        variant: "Sesame",
      },
      {
        sku: "BGSN",
        price: 2.99,
        name: "Bagel Sandwich",
        variant: "Nutella",
      },
    ];
    basket.basketSize = 10;
    basket.addItemToBasket("BGLO");
    basket.addItemToBasket("BGLP");
    basket.addItemToBasket("BGLE");
    basket.addItemToBasket("BGLS");
    basket.addItemToBasket("BGSE");
    basket.addItemToBasket("BGSS");
    basket.addItemToBasket("BGSN");
    const result = basket.showBasket();
    expect(result).toEqual(expected);
  });

  it("a user can check item price before adding it to the basket", () => {
    const expected = "The price of the item is £2.99";
    const result = basket.getItemPrice("BGSN");
    expect(result).toEqual(expected);
  });

  it("a user knows the total price of the items in their basket", () => {
    const expected = "The total price of the items in your basket is £1.37";
    basket.addItemToBasket("BGLO");
    basket.addItemToBasket("BGLP");
    basket.addItemToBasket("BGLS");
    const result = basket.getBasketTotal();
    expect(result).toEqual(expected);
  });
});
