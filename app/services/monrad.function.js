System.register([], function(exports_1) {
    function setupFirstMonrad(playerKeys) {
        // Push bye if odd number of players
        //  NOTE:
        // 'BYE' = player key for bye
        // 'bye' = match result for bye
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
        return round;
    }
    exports_1("setupFirstMonrad", setupFirstMonrad);
    function setupNextMonrad(players) {
        var playersWithKeys = Object.keys(players).map(function (key) {
            var player = players[key];
            player.key = key;
            return player;
        });
        var sortedPlayers = playersWithKeys.sort(function (a, b) { return b.points - a.points; }); // should we sort by quality as well?
        console.log(sortedPlayers);
        // Should return a new round with no rematches
    }
    exports_1("setupNextMonrad", setupNextMonrad);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=monrad.function.js.map