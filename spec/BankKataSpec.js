const BankAccount = require('../src/bank-account')
const Clock = require('../src/clock')
const Printer = require('../src/printer')
const OperationRepository = require('../src/operation-repository')


describe('Bank Account', function () {

    var bankAccount
    var clockStub

    beforeEach(function () {
        var operationRepository = new OperationRepository()
        var printer = new Printer()
        var clock = new Clock()
        clockStub = spyOn(clock, 'now')
        bankAccount = new BankAccount(operationRepository, clock, printer)
    })

    it('should accept deposit', function () {
        clockStub.and.returnValue(new Date(2012, 01, 12));
        bankAccount.deposit(1000)
        expect(bankAccount.balance()).toBe(1000)
    })


    it('should accept withdraw', function () {
        clockStub.and.returnValue(new Date(2012, 01, 13));
        bankAccount.withdraw(1000)
        expect(bankAccount.balance()).toBe(-1000)
    })

    it('should print statement', function () {
        clockStub.and.returnValues(
            new Date(2012, 0, 12),
            new Date(2012, 0, 13),
            new Date(2012, 0, 14)
        );
        bankAccount.deposit(2000)
        bankAccount.withdraw(1000)
        bankAccount.deposit(500)
        expect(bankAccount.printStatement())
        .toBe('date | credit | debit | balance\n' +
        '14/01/2012 | 500 |  | 1500\n' + 
        '13/01/2012 |  | 1000 | 1000\n' +
        '12/01/2012 | 2000 |  | 2000\n')
    })
})