"use strict";
exports.__esModule = true;
var Accounts = /** @class */ (function () {
    function Accounts() {
        this.accNo = 101;
        this.accBal = 10000;
    }
    Accounts.prototype.Withdraw = function (amount) {
        if (amount > 100 && amount < this.accBal) {
            this.accBal -= amount;
            return this.accBal;
        } else {
            return this.accBal;
        }
    };
    Accounts.prototype.Deposit = function (amount) {
        if (amount > 100) {
            this.accBal += amount;
            return this.accBal;
        } else {
            return this.accBal;
        }
    };
    return Accounts;
}());
exports.Accounts = Accounts;