//non-parametrised
function greetAll() {
    return 'Welcome to Functions'
}

var f1 = greetAll();
console.log(f1);

//parameterised
function greetUser(name: string): string {
    return 'Welcome, ' + name;
}

var f2 = greetUser('Abhinav');
console.log(f2);

function add(a: number, b: number): number {
    return a + b;
}

var f3 = add(2, 5);
console.log(f3);

//default
function addWithOperator(a: number, b: number, c: string = '+'): number {
    return a + b;
}

var f4 = addWithOperator(2, 3, '-');
console.log(f4);

//lambda
var f5 = (n1: number, n2: number) => {
    console.log('Arrow function');
    return n1 + n2;
}

console.log(f5(10, 20));

var lambdaGreetings = () => {
    console.log('Welcome');
    return '';
}

lambdaGreetings();

var nameGreetings = (yourName: string) => {
    return 'Welcome ' + yourName;
}

console.log(nameGreetings('Abhinav'));