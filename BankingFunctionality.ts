export interface IBanking {
    Request(something: string): boolean;
    Transfer(fromAcc: number, toAcc: number, amount: number): boolean;
}

export interface ITransactions {
    Withdraw(amount: number, source: string): boolean;
    Deposit(amount: number, source: string): boolean;
}