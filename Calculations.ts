export class Calculations {

    static add(first: number, second: number, otherNumber: number[] = [1,12,1,23,2]): number {

        var sum = 0;
        otherNumber.forEach(element => {
            sum += element;
        });

        return first + second + sum;
    }
}

/*
var obj = new Calculations();
console.log(obj.add(1,2,[3,4,5]));
console.log(obj.add(1,2));*/

Calculations.add(1,2);