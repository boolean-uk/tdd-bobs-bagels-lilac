const inventory = [
    {
        sku: "BGLO",
        price: 0.49,
        name: "Bagel",
        variant: "Onion"
    },
    {
        sku: "BGLP",
        price: 0.39,
        name: "Bagel",
        variant: "Plain"
    },
    {
        sku: "BGLE",
        price: 0.49,
        name: "Bagel",
        variant: "Everything"
    },
    {
        sku: "BGLS",
        price: 0.49,
        name: "Bagel",
        variant: "Sesame"
    },
    {
        sku: "COF", // Not shown in basket.spec probably not needed
        price: 0.99,
        name: "Coffee",
        variant: ""
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
    }

];

module.exports = inventory // not a class. This could be an inventory class rather than a variable