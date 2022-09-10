// import { getCircumference } from "./math_util.js";

// import {PI} from './math_util.js'

// import {getArea} from './math_util.js'

// let radius = 10
// let circum = getCircumference(radius)
// console.log(circum)

// let area = getArea(radius)
// console.log(area)



let animals = []

let name = 
 {
    firstName: 'yahaya',
    lastName: 'bello',
    function: 'minister'
}
let newName = 
 {
    firstName: 'muhammadu',
    lastName: 'buhari',
    function: 'president'
}
let recentName = 
 {
    firstName: 'lai',
    lastName: 'muhammed',
    function: 'information'
}


let array = [...animals, name]
let newArray = [...array, newName]
let recentArray = [...newArray, recentName]
// console.log(recentArray)

let dog = {name: 'bulldog', size: '25pounds', height: '1.5m'}

// console.log({...dog, name: 'German Shepherd', size: '15pounds'})

let insects = ['fly', 'cockroach', 'mosquito']


// console.log([...insects]) // will also return an array ..... amazing


// multiple inputs in react with vanilla javascript
const container = document.querySelector('.container')
const firstname = document.querySelector('.firstName')
const lastname = document.querySelector('.lastName')
const button = document.querySelector('button')

let people = []
let person = {firstName: '', lastName: ''}

// container.addEventListener('click', (e) => {
//     let inputName = e.target.name
//     let inputValue = e.target.value
//     if (inputValue) {
//     person = {...person, [inputName]: inputValue}
// }
// })
 
// button.addEventListener('click', () => {
//     if (person.firstName && person.lastName) {
//         people = [...people, person]
//     }
//     firstname.value = ''
//     lastname.value = ''
//     console.log(person)
//     console.log(people)
//     })

const boyNames = ['adam', 'john', 'james']

const [man, boy, guy] = boyNames
// whenever you destructure an array you can use the element singly but if you only return one item it gives you the first item in the array, if you return two items it gives you the first two items you destructured
// console.log(boy)
// console.log(man)

const girl = 
{
  call: 'sofia',
  age: 15,
  hobby: 'cooking'
}

const {call, age, hobby} = girl
// whenever you destructure an object you can use the properties singly

// console.log(call)
// console.log(age)

const foods = [
    {     food: 'rice',
        category: 'breakfast',
    },
    {     food: 'beans',
        category: 'lunch',
    },
    {     food: 'corn',
        category: 'dinner',
    },
    {     food: 'pear',
        category: 'breakfast',
    },
    {     food: 'mango',
        category: 'fruit',
    },
    {     food: 'cashew',
        category: 'fruit',
    },
    {     food: 'bread',
        category: 'lunch',
    },
    {     food: 'eba',
        category: 'dinner',
    },
    {     food: 'salad',
        category: 'breakfast',
    },
    {     food: 'fish',
        category: 'dinner',
    },
]

let category = foods.map((food)=> food.category)
category = new Set(category)
category = [...category]
console.log(category)

// this method creates a unique set 

function change () {
console.log(document.querySelector('main p'))
}
let year = new Date().getFullYear()
let month = new Date().getMonth() + 1
let day = new Date().getDay()

if (day < 10 ) {
    day = `0${day}`
} 
if (month < 10) {
    month = `0${month}`
}
console.log(`${year}/${month}/${day}`)

console.log(new Date().toLocaleString())

console.log(new Date().toLocaleString())

function returnName() {
    return {id: 'John', address: 'Abuja'}
}

const {id, address} = returnName()
console.log(address)