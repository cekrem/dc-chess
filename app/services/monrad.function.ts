export function setupFirstMonrad(playerKeys: Array<string>) {
    // Push bye if odd number of players
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

    console.warn(round);

    return round;
}