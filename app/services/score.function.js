System.register([], function(exports_1) {
    function getScore(rounds, players) {
        var playedMatches = 0;
        var totalMatches = 0;
        // reset score first
        for (var key in players) {
            players[key].points = 0;
            players[key].wins = 0;
            players[key].blackMatches = 0;
        }
        // for each ROUND
        rounds.forEach(function (round) {
            //for each MATCH
            round.forEach(function (match) {
                totalMatches += 1;
                switch (match.result) {
                    case 'white':
                        players[match.black].blackMatches += 1;
                        players[match.white].wins += 1;
                        players[match.white].points += 1;
                        playedMatches += 1;
                        break;
                    case 'draw':
                        players[match.black].blackMatches += 1;
                        players[match.white].points += 0.5;
                        players[match.black].points += 0.5;
                        playedMatches += 1;
                        break;
                    case 'black':
                        players[match.black].blackMatches += 1;
                        players[match.black].wins += 1;
                        players[match.black].points += 1;
                        playedMatches += 1;
                        break;
                    default:
                        break;
                }
            });
        });
        console.log(players);
        return [playedMatches, totalMatches];
    }
    exports_1("getScore", getScore);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=score.function.js.map