var shopper = {
    name: "Jessica",
    budget: 150.00,
    likesToShop: true,
    groceryCart: ["milk", "bananas", "cereal", "eggs", "bread", "turkey", "gum"],
    shopperInfo: function() {
        return this.name + this.budget + this.likesToShop;
    }
}



console.log(shopper.name + " " + shopper.budget);
console.log(shopper.likesToShop);
console.log(shopper.groceryCart);
console.log(shopper.groceryCart.slice(2,4));
