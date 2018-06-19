import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../calculationService/calculation.service';

@Component({
  selector: 'app-test-my-service',
  templateUrl: './test-my-service.component.html',
  styleUrls: ['./test-my-service.component.css']
})
export class TestMyServiceComponent{
  constructor(private _cal:CalculationService) {

  }
  test(){
    /* var obj = new CalculationService();
    return obj.addNumbers(10,20); */

    return this._cal.addNumbers(10,20);
  }  

}
