var Operation = function (amount, date) {
    this.date = date
    this.amount = amount
}

Operation.prototype.getAmount = function () {
    return this.amount
}

Operation.prototype.getDate = function () {
    return this.date
}

module.exports = Operation