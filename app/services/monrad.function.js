System.register([], function(exports_1) {
    function setupFirstMonrad(players) {
        var playersWithKeys = makeArrayWithKeys(players);
        // Sort by rating here if need be
        // let sortedPlayers = playersWithKeys.sort((a, b) => b.rating - a.rating);
        // Push bye if odd number of players
        // NO! That's fine for roundrobin, now we simply give bye by removing player
        if (playersWithKeys.length % 2 !== 0) {
            // Remove last player from array instead of adding 'BYE'-player (which sucks)
            // The score function will give one point per bye, it's cleanest not to do so here
            var bye = playersWithKeys.pop();
            console.log('Odd number of players, removing:');
            console.log(bye);
            players[bye.key].byes = [0];
        }
        var round = [];
        for (var index = 0; index < playersWithKeys.length; index += 2) {
            var match = {
                black: playersWithKeys[index].key,
                result: 0,
                white: playersWithKeys[index + 1].key // player [1]
            };
            round.push(match);
        }
        return round;
    }
    exports_1("setupFirstMonrad", setupFirstMonrad);
    function setupNextMonrad(players, roundIndex) {
        var playersWithKeys = makeArrayWithKeys(players);
        var sortedPlayers = playersWithKeys.sort(function (a, b) { return b.points - a.points; });
        console.error(sortedPlayers.length);
        // If player leaves tournament, remove from matching, not from score or player list
        for (var index = sortedPlayers.length - 1; index > -1; index--) {
            var player = sortedPlayers[index];
            if (player.hasLeft) {
                sortedPlayers.splice(index, 1);
            }
        }
        console.error(sortedPlayers.length);
        // Give bye to player with lowest score
        if (sortedPlayers.length % 2 !== 0) {
            for (var index = (sortedPlayers.length - 1); index > 0; index--) {
                var player = sortedPlayers[index];
                if (!players[player.key].byes) {
                    var spliceArray = sortedPlayers.splice(index, 1);
                    var bye = spliceArray[0];
                    console.log('Odd number of players, removing:');
                    console.log(bye);
                    players[bye.key].byes = [roundIndex];
                    break;
                }
            }
        }
        var round = [];
        // MONRAD MATCHING
        while (sortedPlayers.length) {
            var match = findNextMatch(sortedPlayers, players);
            round.push(match);
        }
        return round;
    }
    exports_1("setupNextMonrad", setupNextMonrad);
    function removeLastBye(players, roundsLength) {
        var lastRoundIndex = roundsLength - 1;
        var playersWithKeys = makeArrayWithKeys(players);
        playersWithKeys.forEach(function (player) {
            if (player.byes) {
                if (player.byes[0] == lastRoundIndex) {
                    players[player.key].byes = null;
                }
            }
        });
    }
    exports_1("removeLastBye", removeLastBye);
    function makeArrayWithKeys(object) {
        var arrayWithKeys = Object.keys(object).map(function (key) {
            var instance = object[key];
            instance.key = key;
            return instance;
        });
        return arrayWithKeys;
    }
    function findNextMatch(sortedPlayers, players) {
        // Establish current top player (usually black)
        var blackKey = sortedPlayers[0].key;
        var black = players[blackKey];
        // And find best match (usually white) (This loops through remaining players, #for-op)
        for (var index = 1; index < sortedPlayers.length; index++) {
            var potentialWhiteKey = sortedPlayers[index].key;
            var potentialWhite = players[potentialWhiteKey];
            var alreadyPlayed = false;
            // This loops through matches of potential white opponent, #for-op-match
            // Note: firebase removes empty arrays, that's why we have to do the if
            if (potentialWhite.matches) {
                for (var matchIndex = 0; matchIndex < potentialWhite.matches.length; matchIndex++) {
                    var match_1 = potentialWhite.matches[matchIndex];
                    if (match_1) {
                        if (match_1[1] == blackKey) {
                            alreadyPlayed = true;
                            break;
                        }
                    }
                }
            }
            if (alreadyPlayed) {
                // keep looking, restart #for-op
                continue;
            }
            // Found match! Setting up match...
            var match = {
                black: blackKey,
                result: 0,
                white: potentialWhiteKey
            };
            console.log(black.blackMatches);
            console.log(potentialWhite.blackMatches);
            // override color if neccessary
            if (black.blackMatches > (potentialWhite.blackMatches || 0)) {
                console.warn('doing color override');
                match.white = blackKey;
                match.white = potentialWhiteKey;
            }
            //... and removing players from sortedPlayers
            sortedPlayers.splice(index, 1); // white
            sortedPlayers.splice(0, 1); // black
            console.warn('Found a match, remaining players not matched: ');
            console.warn(sortedPlayers);
            return match;
        }
        throw new Error('Impossible to match!');
    }
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=monrad.function.js.map