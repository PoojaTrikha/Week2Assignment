var arrays = []
var newArray = []
var itemName;
var quantity;
var price;
class ShoppingCart {

    constructor() {
        this.arrays = [];
    }

    getItems() {
        return this.arrays
    }

    addItem(ItemName, quantityItem, priceItem) {
        this.arrays.push({
            name: ItemName,
            quantity: quantityItem,
            pricePerUnit: priceItem
        })
    }

    clear() {
        return this.arrays = []
    }

    clone() {

        return newArray = [...this.arrays];
    }



}

var cart = new ShoppingCart("Apples", 12, 44)
cart.getItems();
cart.addItem("Trash can", 1, 15.5);
cart.clear()
cart.clone()

module.exports = ShoppingCart;
