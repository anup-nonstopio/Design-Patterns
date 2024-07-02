let instance

class ShoppingBag {
    constructor() {
        if (instance) {
            throw new Error('This instance already exists')
        }
        this.bag = []
        instance = this
    }
    getBag() {
        console.log(this.bag)
    }
    addItem(item) {
        this.bag.push(item)
    }
}

const bag = Object.freeze(new ShoppingBag()) // Singleton instance

// export default bag;

const bag2 = new ShoppingBag() // Error: This instance already exists