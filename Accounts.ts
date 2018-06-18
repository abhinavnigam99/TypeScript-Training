export abstract class Accounts {
    accNo: number = 101;
    accBal: number = 10000;

    Withdraw(amount: number): number {
        if (amount > 100 && amount < this.accBal) {
            this.accBal -= amount;
            return this.accBal;
        } else {
            return this.accBal;
        }
    }

    Deposit(amount: number): number {
        if (amount > 100) {
            this.accBal += amount;
            return this.accBal;
        } else {
            return this.accBal;
        }
    }
}