"use strict";
exports.__esModule = true;
var Banking = /** @class */ (function () {
    function Banking() {
        this.accountsInfo = {
            accNo: 101,
            accName: 'Abhinav',
            accBal: 1000,
            accType: 'Savings'
        };
        this.listOfTech = ['.Net', 'Angular', 'Node'];
    }
    Banking.prototype.displayData = function () {
        console.log(this.accountsInfo.accNo + ' ' + this.accountsInfo.accName);
    };
    Banking.prototype.displayTech = function () {
        this.listOfTech.forEach(function (element) {
            console.log(element);
        });
    };
    Banking.prototype.pushTech = function (techName) {
        this.listOfTech.push(techName);
    };
    Banking.prototype.popTech = function () {
        console.log(this.listOfTech.pop());
    };
    return Banking;
}());
exports.Banking = Banking;
var obj = new Banking();
obj.displayData();
console.log(obj.accountsInfo.accType + ' ' + obj.accountsInfo.accBal);
obj.displayTech();
obj.popTech();
obj.pushTech('Java');
obj.pushTech('Python');
obj.displayTech();
