export function setupFirstMonrad(playerKeys: Array<string>) {
    // Push bye if odd number of players
    
    //  NOTE:
    // 'BYE' = player key for bye
    // 'bye' = match result for bye
    
    if (playerKeys.length % 2 !== 0) {
        playerKeys.push('BYE');
    }

    let round = [];

    for (let index = 0; index < playerKeys.length; index += 2) {
        let match = {
            black: playerKeys[index],   // player [0]
            result: 0,
            white: playerKeys[index + 1]  // player [1]
        };

        if ((playerKeys[index] == 'BYE') || playerKeys[index + 1] == 'BYE') {
            match.result = 'bye';
        }
        round.push(match);
    }

    return round;
}

export function setupNextMonrad(players: any) {
    let playersWithKeys = Object.keys(players).map(key => {
        let player = players[key];
        player.key = key;

        return player;
    });

    let sortedPlayers = playersWithKeys.sort((a, b) => b.points - a.points); // should we sort by quality as well?
    
    console.log(sortedPlayers);
    
    // Should return a new round with no rematches
}