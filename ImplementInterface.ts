import {
    IBanking,
    ITransactions
} from './BankingFunctionality';

class Saving implements IBanking {
    Request(something: string): boolean {
        return false;
    }

    Transfer(fromAcc: number, toAcc: number, amount: number): boolean {
        return false;
    }
}

class BankAccount implements IBanking, ITransactions {
    Request(something: string): boolean {
        return false;
    }

    Transfer(fromAcc: number, toAcc: number, amount: number): boolean {
        return false;
    }

    Withdraw(amount: number, source: string): boolean {
        return false;
    }
    Deposit(amount: number, source: string): boolean {
        return false;
    }

}