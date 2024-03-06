//Create a pizza object that has four properties and at least three methods

function Pizza(size, quantity, type, crust, sauce, topping1, topping2, topping3, ovenTime){
    this.size = size
    this.quantity = quantity
    this.type = type
    this.crust = crust
    this.sauce = sauce
    this.topping1 = topping1
    this.topping2 = topping2
    this.topping3 = topping3
    this.ovenTimeMin = ovenTime
    this.timeBaked = function(){
        console.log(`Your ${type} pizza will cook for ${this.ovenTimeMin} minutes`)
    }
    this.estimatedDelivery = function(){
        console.log(`Your ${quantity} ${type} pizza(s) will be ready in ${ovenTimeMin * quantity}`)
    }
    this.attitudeFromChef = function(){
        console.log(`Your ${size} ${crust} pizza with ${sauce},${topping1},${topping2},${topping3} sounds disturbing!!!`)
    }
}

let order1 = new Pizza( 'large', '2', 'chefs special', 'regular', 'barbecue', 'pepperonis', 'artichokes', 'pickles')
let order2 = new Pizza( 'small', '1', 'cheese', 'cauliflour', 'ragu', 'extra cheese', 'mozzerella', 'feta')
