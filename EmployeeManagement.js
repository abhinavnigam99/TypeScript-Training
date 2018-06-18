"use strict";
exports.__esModule = true;
var EmployeeManagement = /** @class */ (function () {
    function EmployeeManagement() {
        this.employee = [
            {
                empNo: 101,
                empName: 'Abhinav',
                empDesignation: 'Analyst',
                empSalary: 10000,
                empCity: 'Mumbai'
            },
            {
                empNo: 102,
                empName: 'Kunal',
                empDesignation: 'Analyst',
                empSalary: 1000,
                empCity: 'Indore'
            },
        ];
    }
    EmployeeManagement.prototype.addNewEmp = function (empNo, empName, empDesignation, empSalary, empCity) {
        this.employee.push({ empNo: empNo, empName: empName, empDesignation: empDesignation, empSalary: empSalary, empCity: empCity });
    };
    EmployeeManagement.prototype.removeEmp = function () {
        this.employee.pop();
    };
    EmployeeManagement.prototype.totalEmp = function () {
        return this.employee.length;
    };
    EmployeeManagement.prototype.totalSal = function () {
        var sum = 0;
        this.employee.forEach(function (element) {
            sum += element.empSalary;
        });
        return sum;
    };
    return EmployeeManagement;
}());
exports.EmployeeManagement = EmployeeManagement;
var obj = new EmployeeManagement();
console.log(obj.totalEmp());
console.log(obj.totalSal());
obj.addNewEmp(999, 'abcd', 'xyz', 1234, 'mnop');
obj.addNewEmp(111, 'xyz', 'mnop', 4213, 'abcd');
console.log(obj.totalEmp());
console.log(obj.totalSal());
obj.removeEmp();
console.log(obj.totalEmp());
console.log(obj.totalSal());
