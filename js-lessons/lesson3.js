// objects
var custumer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["BMW", "Volvo", "Tesla", "Ford"]
}
// dot notation
custumer.firstName = "Mike"
// bracket notation
custumer['firstName'] = "Silver"
console.log(`${custumer.firstName} ${custumer.lastName}`)

// arrays
var cars = ["BMW", "Volvo", "Tesla", "Ford"]
cars[1] = "Toyota"
console.log(cars[1])
console.log(custumer.cars[0])