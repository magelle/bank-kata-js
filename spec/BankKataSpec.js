const BankAccount = require('../src/bank-account');

describe('Bank Account', function () {

    it('should accept deposit', function () {
        var bankAccount = new BankAccount();
        bankAccount.deposit(1000);
        expect(bankAccount.balance).toBe(1000);
    });


    it('should accept withdraw', function () {
        var bankAccount = new BankAccount();
        bankAccount.withdraw(1000);
        expect(bankAccount.balance).toBe(-1000);
    });
});