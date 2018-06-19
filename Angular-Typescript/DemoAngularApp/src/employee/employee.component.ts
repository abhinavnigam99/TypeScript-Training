import {
  Component
} from '@angular/core';

@Component({
  selector: 'employee-component',
  templateUrl: './employee.component.html'
})

export class EmployeeComponent {
  employeeList: any[] = [
        {
            empNo: 101,
            empName: 'Abhinav',
            empDesignation: 'Analyst',
            empSalary: 10000
        }, 
        {
            empNo: 101,
            empName: 'Abhinav',
            empDesignation: 'Analyst',
            empSalary: 10000
        }, 
        {
            empNo: 101,
            empName: 'Abhinav',
            empDesignation: 'Analyst',
            empSalary: 10000
        }, 
        {
            empNo: 101,
            empName: 'Abhinav',
            empDesignation: 'Analyst',
            empSalary: 10000
        }
    ];
}
