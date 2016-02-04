System.register([], function(exports_1) {
    function setupFirstMonrad(playerKeys) {
        // Push bye if odd number of players
        if (playerKeys.length % 2 !== 0) {
            playerKeys.push('BYE');
        }
        var round = [];
        for (var index = 0; index < playerKeys.length; index += 2) {
            var match = {
                black: playerKeys[index],
                result: 0,
                white: playerKeys[index + 1] // player [1]
            };
            if ((playerKeys[index] == 'BYE') || playerKeys[index + 1] == 'BYE') {
                match.result = 'bye';
            }
            round.push(match);
        }
        console.warn(round);
        return round;
    }
    exports_1("setupFirstMonrad", setupFirstMonrad);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=monrad.function.js.map