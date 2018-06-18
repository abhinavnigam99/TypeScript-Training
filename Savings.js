"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({
                __proto__: []
            }
            instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
        function (d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Accounts_1 = require("./Accounts");
var Savings = /** @class */ (function (_super) {
    __extends(Savings, _super);

    function Savings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Savings;
}(Accounts_1.Accounts));
var savObj = new Savings();
var accObj = new Accounts_1.Accounts();
console.log(savObj.accBal);
console.log(accObj.accBal);
savObj.accBal = 5000;
console.log('After Depsoit : ' + savObj.Deposit(1000));
console.log('After Withdraw : ' + savObj.Withdraw(1200));
console.log(savObj.accBal);
console.log(accObj.accBal);