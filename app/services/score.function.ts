export function getScore(rounds: Array<Array<any>>, players) {
    let playedMatches = 0;
    let totalMatches = 0;
    
    // reset score first
    for (let key in players) {
        players[key].points = 0;
        players[key].wins = 0;
        players[key].blackMatches = 0;
    }
    
    // for each ROUND
    rounds.forEach(round => {
        //for each MATCH
        round.forEach(match => {
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
                    players[match.black].points += 0.5
                    
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