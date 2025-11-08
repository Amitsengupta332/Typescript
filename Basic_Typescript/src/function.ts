// Function
//? arrow function , normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

add(2, 2);


// object => function => method

const poorUser = {
    name : 'amit',
    age : 23,
    getAge() {
        return this.age;
    }
}