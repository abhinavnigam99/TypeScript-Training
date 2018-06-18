"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee() {
        this.firstName = 'Abhinav';
        this.lastName = 'Nigam';
        this.contact = 2256580;
    }
    Employee.prototype.displayInfo = function () {
        console.log('First Name: ' + this.firstName + '\nLast Name: ' +
            this.lastName + '\nContact: ' + this.contact);
    };
    return Employee;
}());
exports.Employee = Employee;
var Accounts = /** @class */ (function () {
    function Accounts() {
        var _this = this;
        this.accNo = 101;
        this.accName = 'Abhinav Nigam';
        this.accBalance = 5000;
        this.displayInterest = function (rate) {
            return _this.accBalance * rate / 100;
        };
    }
    return Accounts;
}());
exports.Accounts = Accounts;