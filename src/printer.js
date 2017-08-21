const Printer = function () {}

function formatNumber(nbr) {
    return '0' + nbr.toString()
}

function formatDate(date) {
    return date.getDate() + '/' + formatNumber(date.getMonth()+1) + '/' + date.getFullYear();
}

function formatDeposit(deposit, balance) {
    return formatDate(deposit.getDate()) 
            + ' | '
            + deposit.getAmount()
            + ' |  | '
            + balance
            + '\n'
}

function formatWithdraw(withdraw, balance) {
    return formatDate(withdraw.getDate())
            + ' |  | '
            + (-withdraw.getAmount())
            + ' | '
            + balance
            + '\n'
}

function compareOperations(op1, op2) {
    return op1.getDate() > op2.getDate()
}

Printer.prototype.print = function(operations) {
    var balance = 0;
    return operations
    .sort(compareOperations)
    .map(function (op) {
        balance += op.getAmount();
        if (op.getAmount() > 0) {
            return formatDeposit(op, balance)
        } else {
            return formatWithdraw(op, balance)
        }
    })
    .reverse()
    .reduce(function (op1, op2) { return op1 + op2},
    'date | credit | debit | balance\n')
}

module.exports = Printer