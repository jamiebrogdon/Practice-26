//Create a constructor with 4 properties and 3 methods

class MakeCake{
    constructor(cakeFlavor,cakeTierAmount,cakeIcing,cakeDecoratedTrueFalse){
        this.flavor = cakeFlavor
        this.numberOfTiers = cakeTierAmount
        this.icing = cakeIcing
        this.cakeDecorated = cakeDecoratedTrueFalse
}
    chefInKitchen(){
        alert("OH MY WHAT A BEAUTIFUL CAKE!!!!")
    }
    timeToCook(){
        alert("Its going to take me a minute!!")
    }
    costOfCake(){
        alert(`Your cake will cost $(${this.numberOfTiers} * 20)`)
    }
}

let cakeyCake = new MakeCake( 'yellow', '2 tier', 'chocolate', false )
let vanillaSurpise = new MakeCake( 'vanilla', '20 tier', 'strawberry', true )
