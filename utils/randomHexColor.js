var randomHexColor = function() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
};

module.exports = randomHexColor;