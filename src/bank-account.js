var BankAccount = function() {
    this.balance = 0;
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}

BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}

BankAccount.prototype.printStatement = function () {
    this.op
}

module.exports = BankAccount;