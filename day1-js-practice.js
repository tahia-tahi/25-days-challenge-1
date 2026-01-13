// Let এর ক্ষেত্রে value change করা  যায়
// Const এর ক্ষেত্রে value change করা  যায় না।

//Function and arrow function
function add(a, b) {
    return a + b;
}

const add = (a, b) => a + b;


// destructuring
const student = {
    name: 'Tahia',
    age: 26,
    passed: true,
    subject: 'management'
}

const { name, age, subject } = student
console.log(age, subject);


// spread operator
const arr1 = [1, 2, 3, 4, 5, 6, 7]
const arr2 = [...arr1, 8, 9, 10, 11, 12]
console.log(arr2);

const myBook = { bookName: 'Management', ID: 19302047, grade: '2' }
const myCourses = { ...myBook, campus: 'CU', credits: 3, course: 'IBM' }
console.log(myCourses);

// Array method
// filter : condition true,, keeps the element
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);

// map : creates new array
const students = [
    { name: "A", marks: 80 },
    { name: "B", marks: 40 },
    { name: "C", marks: 70 },
    { name: "D", marks: 30 }
];

const names = students.map(student => student.name)
console.log(names);

const passed = students.filter(student=> student.marks >= 50)
console.log(passed);

// reduce: convert in one value
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

const totalPrice = products.reduce((sum, product) => {
    return sum + product.price
}, 0)

console.log(totalPrice);

