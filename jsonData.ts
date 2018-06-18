export class Banking{
    accountsInfo = {
        accNo: 101,
        accName: 'Abhinav',
        accBal: 1000,
        accType: 'Savings'
    };

    displayData(){
        console.log(this.accountsInfo.accNo + ' ' + this.accountsInfo.accName);
    }

    listOfTech = ['.Net','Angular','Node'];

    displayTech(){
        this.listOfTech.forEach(element => {
            console.log(element);
        });
    }
    pushTech(techName : string){
        this.listOfTech.push(techName);
    }
    popTech(){
        console.log(this.listOfTech.pop());
    }

}

var obj = new Banking();
obj.displayData();

console.log(obj.accountsInfo.accType + ' ' + obj.accountsInfo.accBal);

obj.displayTech();
obj.popTech();
obj.pushTech('Java');
obj.pushTech('Python');
obj.displayTech();