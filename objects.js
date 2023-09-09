console.log("привет!");
class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return this.brand + " " + this.type;
    }
    getPrice() {
        return this.price;
    }
}

class Car extends Transport {
    constructor(type, price, brand, doorsCount) {
        super(type, price, brand);
        this.doorsCount = doorsCount;
    }

    getDoorsCount() {
        return this.doorsCount;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }
}