//non-parametrised
function greetAll() {
    return 'Welcome to Functions';
}
var f1 = greetAll();
console.log(f1);
//parameterised
function greetUser(name) {
    return 'Welcome, ' + name;
}
var f2 = greetUser('Abhinav');
console.log(f2);

function add(a, b) {
    return a + b;
}
var f3 = add(2, 5);
console.log(f3);
//default
function addWithOperator(a, b, c) {
    if (c === void 0) {
        c = '+';
    }
    return a + b;
}
var f4 = addWithOperator(2, 3, '-');
console.log(f4);
//lambda
var f5 = function (n1, n2) {
    console.log('Arrow function');
    return n1 + n2;
};
console.log(f5(10, 20));
var lambdaGreetings = function () {
    console.log('Welcome');
    return '';
};
lambdaGreetings();
var nameGreetings = function (yourName) {
    return 'Welcome ' + yourName;
};
console.log(nameGreetings('Abhinav'));