let rentCar = require('./rentCar');
let { assert, expect } = require('chai');


describe('rentCAr', () => {
/**
 *•	searchCar(shop, model) - A function that accepts two parameters (one array and one string):
o	The function checks whether the submitted string model is present in the shop 
(example: ["Volkswagen", "BMW", "Audi"]), 
and return number of matching elements and the model of the car in the message: 
`There is ${findModel.length} car of model ${model} in the catalog!`;
o	There is a need for validation of the input, a shop and a model mаy not always be valid. In case of submitted invalid parameters, throw an error "Invalid input!";
o	If there are no matching elements, the function throw an error: 'There are no such models in the catalog!'

 */
    describe('searchCar', () => {
        it('Whit correct input', () => {
assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi", 'Audi']),`There is 1 car of model Audi in the catalog!`)
        })

    })





})