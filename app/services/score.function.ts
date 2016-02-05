export function getScore(rounds: Array<Array<any>>, players) {
    let playedMatches = 0;
    let totalMatches = 0;
    let roundIndex = -1; // for matches array
    
    // reset score first
    for (let key in players) {
        players[key].points = players[key].byes.length || 0;
        players[key].wins = 0;
        players[key].blackMatches = 0;
        players[key].matches = [];
    }
    
    // for each ROUND
    rounds.forEach(round => {
        roundIndex += 1;
        //for each MATCH
        round.forEach(match => {
            totalMatches += 1;

            switch (match.result) {
                /*case 'bye':
                    if (match.white == 'BYE') {
                        players[match.black].byes += 1;
                        players[match.black].points += 1;
                    }
                    if (match.black == 'BYE') {
                        players[match.white].byes += 1;
                        players[match.white].points += 1;
                    }

                    break;*/

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
                    players[match.black].points += 0.5

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
    
    // determine buchholz and neustadtl score
    for (var key in players) {
        players[key].buchholz = 0; // reset buchholz first
        players[key].neustadtl = 0;

        // put inside try/catch in case I forgot something...
        try {
            players[key].matches.forEach(match => {
                if (match) { // if match was played, could be false!
                
                    // determine buchholz
                    players[key].buchholz += players[match[1]].points;
                
                    // determine neustadtl
                    if (match[0] == 'win') {
                        players[key].neustadtl += players[match[1]].points;
                    }
                    if (match[0] == 'draw') {
                        players[key].neustadtl += (players[match[1]].points * 0.5);
                    }
                }
            });
        } catch (error) {
            console.warn(error);
        }
    }

    console.log(players);

    return [playedMatches, totalMatches];
}