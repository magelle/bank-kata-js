var OperationRepository = function() {
    this.operations = [];
}

OperationRepository.prototype.add = function (op) {
    this.operations[this.operations.length] = op
}

OperationRepository.prototype.all = function () {
    return this.operations
}

module.exports = OperationRepository;