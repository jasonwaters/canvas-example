var randomNegative = function() {
    return Math.floor(Math.random()*2) == 1 ? 1 : -1;
};

module.exports = randomNegative;