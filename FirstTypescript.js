var msg = 'Welcome to TypeScript';
console.log(msg);
var firstName = 'Abhinav';
var lastName = 'Nigam';
var height = 5.5;
var isDeveloper = false;
var contact = 9044720234;
var newContact = '7906945217';
console.log(firstName + ' ' + typeof (firstName) + '\n' + lastName + ' ' + typeof (lastName) + '\n' +
    height + ' ' + typeof (height) + '\n' + isDeveloper + ' ' + typeof (isDeveloper) + '\n' +
    contact + ' ' + typeof (contact) + '\n' + newContact + ' ' + typeof (newContact));
function GreetUser() {
    return 'Welcome to Functions';
}
function Greet(name) {
    console.log('Welcome, ' + name);
    //return 'Welcome, ' + name;
}
var f1 = GreetUser();
var f2 = Greet('Abhinav');
console.log(f1);
console.log(f2);
