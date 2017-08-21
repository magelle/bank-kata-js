const Clock = function () {}

Clock.prototype.now = function () {
    return new Date()
}

module.exports = Clock