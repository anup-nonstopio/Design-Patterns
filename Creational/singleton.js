// *********** Usage 2 ***********

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





/*
*********** Usage 2 ***********

let bag = []

const ShoppingBag = {
    getBag() {
        console.log(bag)
    },
    addItem(item) {
        bag.push(item)
    }
}

const singletonBag = Object.freeze(ShoppingBag) // Singleton instance

export default singletonBag;
*/