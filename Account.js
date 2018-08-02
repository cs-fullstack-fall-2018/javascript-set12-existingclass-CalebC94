class Account{

    constructor(accountName, accountBalance)
    {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    withdrawal(amount)
    {
        this.accountBalance -= amount;
    }

    deposit(amount)
    {
        this.accountBalance += amount;
    }

    balance()
    {
        return this.accountBalance;
    }
}

function main() {

    var bankAccount = new Account("CreditUnion", 100);
    bankAccount.deposit(20);
    alert(bankAccount.balance());


    var bA = new Account("Matt's account", 1000);
    var bA1 = new Account("My account", 0);

    bA.withdrawal(100);
    bA1.deposit(100);

    alert(bA.balance());
    alert(bA1.balance());

}

main();