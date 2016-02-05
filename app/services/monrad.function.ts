export function setupFirstMonrad(players) {
    let playersWithKeys = makeArrayWithKeys(players);
    // Sort by rating here if need be
    // let sortedPlayers = playersWithKeys.sort((a, b) => b.rating - a.rating);
    
    // Push bye if odd number of players
    // NO! That's fine for roundrobin, now we simply give bye by removing player
    if (playersWithKeys.length % 2 !== 0) {
        // Remove last player from array instead of adding 'BYE'-player (which sucks)
        // The score function will give one point per bye, it's cleanest not to do so here
        let bye = playersWithKeys.pop();
        console.log('Odd number of players, removing:');
        console.log(bye);

        players[bye.key].byes = [0];
    }

    let round = [];

    for (let index = 0; index < playersWithKeys.length; index += 2) {
        let match = {
            black: playersWithKeys[index].key,   // player [0]
            result: 0,
            white: playersWithKeys[index + 1].key  // player [1]
        };

        round.push(match);
    }

    return round;
}

export function setupNextMonrad(players: any, roundIndex: number) {
    let playersWithKeys = makeArrayWithKeys(players);
    let sortedPlayers = playersWithKeys.sort((a, b) => b.points - a.points);

    // Give bye to player with lowest score
    if (sortedPlayers.length % 2 !== 0) {
        for (let index = (sortedPlayers.length - 1); index > 0; index--) {
            let player = sortedPlayers[index];

            if (!players[player.key].byes) {
                let spliceArray = sortedPlayers.splice(index, 1);
                let bye = spliceArray[0];

                console.log('Odd number of players, removing:');
                console.log(bye);

                players[bye.key].byes = [roundIndex];
                break;
            }
        }
    }

    let round = [];

    // MONRAD MATCHING
    while (sortedPlayers.length) {
        let match = findNextMatch(sortedPlayers, players);
        round.push(match);
    }
    
    return round;
}

function makeArrayWithKeys(object) {
    let arrayWithKeys = Object.keys(object).map(key => {
        let instance = object[key];
        instance.key = key;

        return instance;
    });

    return arrayWithKeys;
}

function findNextMatch(sortedPlayers, players) {
        // Establish current top player (black)
        var blackKey = sortedPlayers[0].key;
        let black = players[blackKey];
        
        // And find best match (white) (This loops through remaining players, #for-op)
        for (let index = 1; index < sortedPlayers.length; index++) {
            let potentialWhiteKey = sortedPlayers[index].key;
            let potentialWhite = players[potentialWhiteKey];

            var alreadyPlayed = false;
            // This loops through matches of potential white opponent, #for-op-match
            // Note: firebase removes empty arrays, that's why we have to do the if
            if (potentialWhite.matches) {
                for (let matchIndex = 0; matchIndex < potentialWhite.matches.length; matchIndex++) {
                    let match = potentialWhite.matches[matchIndex];
                    if (match) {
                        if (match[1] == blackKey) {
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
            let match = {
                black: blackKey,
                result: 0,
                white: potentialWhiteKey
            };
            
            //... and removing players from sortedPlayers
            sortedPlayers.splice(index, 1); //white
            sortedPlayers.splice(0, 1); // black
            
            console.warn('Found a match, remaining players not matched: ');
            console.warn(sortedPlayers);
            
            return match;
        }
        
        throw new Error('Impossible to match!');
    }