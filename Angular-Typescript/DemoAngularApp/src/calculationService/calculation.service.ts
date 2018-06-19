import {Injectable} from '@angular/core';

@Injectable()
export class CalculationService {
  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }

  subNumbers(num1: number, num2: number): number {
    return num1 - num2;
  }
  mulNumbers(num1: number, num2: number): number {
    return num1 * num2;
  }

  divNumbers(num1: number, num2: number): number {
    return num1 / num2;
  }

  firstName : string = 'Abhinav Nigam';
}
