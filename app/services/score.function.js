System.register([], function(exports_1) {
    function getScore(rounds, players) {
        var playedMatches = 0;
        var totalMatches = 0;
        var roundIndex = -1; // for matches array
        // reset score first
        for (var key in players) {
            players[key].points = 0;
            players[key].wins = 0;
            players[key].blackMatches = 0;
            players[key].matches = [];
        }
        // for each ROUND
        rounds.forEach(function (round) {
            roundIndex += 1;
            //for each MATCH
            round.forEach(function (match) {
                totalMatches += 1;
                switch (match.result) {
                    case 'white':
                        players[match.black].blackMatches += 1;
                        players[match.white].wins += 1;
                        players[match.white].points += 1;
                        playedMatches += 1;
                        players[match.white].matches[roundIndex] = ['win', match.black];
                        players[match.black].matches[roundIndex] = ['lose', match.white];
                        break;
                    case 'draw':
                        players[match.black].blackMatches += 1;
                        players[match.white].points += 0.5;
                        players[match.black].points += 0.5;
                        playedMatches += 1;
                        players[match.white].matches[roundIndex] = ['draw', match.black];
                        players[match.black].matches[roundIndex] = ['draw', match.white];
                        break;
                    case 'black':
                        players[match.black].blackMatches += 1;
                        players[match.black].wins += 1;
                        players[match.black].points += 1;
                        playedMatches += 1;
                        players[match.white].matches[roundIndex] = ['lose', match.black];
                        players[match.black].matches[roundIndex] = ['win', match.white];
                        break;
                    default:
                        players[match.white].matches[roundIndex] = false;
                        players[match.black].matches[roundIndex] = false;
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