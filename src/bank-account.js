const OperationRepository = require('./operation-repository')
const Clock = require('./clock')
const Operation = require('./operation') 

var BankAccount = function(operationRepo, clock, printer) {
    this.operationRepo = operationRepo
    this.clock = clock
    this.printer = printer
}

BankAccount.prototype.deposit = function (amount) {
    this.operationRepo.add(new Operation(amount, this.clock.now()))
}

BankAccount.prototype.withdraw = function (amount) {
    this.operationRepo.add(new Operation(-amount,  this.clock.now()))
}

BankAccount.prototype.balance = function () {
    return this.operationRepo.all()
    .map(function (op) { return op.getAmount() })
    .reduce(function(a, b) { return a + b}, 0);
}

BankAccount.prototype.printStatement = function () {
    return this.printer.print(this.operationRepo.all())
}

module.exports = BankAccount;