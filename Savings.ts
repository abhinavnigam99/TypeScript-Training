import {
    Accounts
} from './Accounts';

class Savings extends Accounts {

}

var savObj = new Savings();

console.log(savObj.accBal);

savObj.accBal = 5000;

console.log('After Depsoit : ' + savObj.Deposit(1000));
console.log('After Withdraw : ' + savObj.Withdraw(1200));

console.log(savObj.accBal);