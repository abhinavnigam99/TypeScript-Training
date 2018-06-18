"use strict";
exports.__esModule = true;
var Calculations = /** @class */ (function () {
    function Calculations() {
    }
    Calculations.prototype.add = function (first, second, otherNumber) {
        if (otherNumber === void 0) { otherNumber = [2, 3, 4]; }
        var sum = 0;
        otherNumber.forEach(function (element) {
            sum += element;
        });
        return first + second + sum;
    };
    return Calculations;
}());
exports.Calculations = Calculations;
var obj = new Calculations();
console.log(obj.add(1, 2, [3, 4, 5]));
console.log(obj.add(1, 2));
