export class EmployeeManagement{
    employee = [
        { 
            empNo : 101,
            empName : 'Abhinav',
            empDesignation : 'Analyst',
            empSalary : 10000,
            empCity : 'Mumbai' 
        },
        { 
            empNo : 102,
            empName : 'Kunal',
            empDesignation : 'Analyst',
            empSalary : 1000,
            empCity : 'Indore' 
        },
    ]

    addNewEmp(empNo:number,empName:string,empDesignation:string,empSalary:number,empCity:string){
        this.employee.push({empNo,empName,empDesignation,empSalary,empCity});
    }
    
    removeEmp(){
        this.employee.pop();
    }
    totalEmp():number{
        return this.employee.length;
    }
    totalSal() : number{
        var sum = 0; 
        this.employee.forEach(element => {
            sum += element.empSalary;
        });
        return sum;
    }

}

var obj = new EmployeeManagement();

console.log(obj.totalEmp());
console.log(obj.totalSal());
obj.addNewEmp(999,'abcd','xyz',1234,'mnop');
obj.addNewEmp(111,'xyz','mnop',4213,'abcd');
console.log(obj.totalEmp());
console.log(obj.totalSal());
obj.removeEmp();
console.log(obj.totalEmp());
console.log(obj.totalSal());