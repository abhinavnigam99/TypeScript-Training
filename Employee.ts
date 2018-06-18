export class Employee{
    
    firstName : string = 'Abhinav';
    lastName : string = 'Nigam';
    contact : number = 2256580;

    displayInfo(){
        console.log('First Name: ' + this.firstName + '\nLast Name: ' + 
                    this.lastName + '\nContact: ' + this.contact);
    }
}

export class Accounts{
    accNo : number  = 101;
    accName : string = 'Abhinav Nigam';
    accBalance : number = 5000;

    displayInterest = (rate:number):number => {
        return this.accBalance * rate / 100;
    }
}
