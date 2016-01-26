export function setupRoundRobin(playerKeys: Array<string>) {
    // Push bye if odd number of players
    if (playerKeys.length % 2 !== 0) {
        playerKeys.push('BYE');
    }

    return roundRobinSwitch(playerKeys);
}

function roundRobinSwitch(players) {
    let rounds = [];

    switch (players.length) {
        case 4:
            rounds = roundRobin(players,
                [
                    [[1, 4], [2, 3]],
                    [[4, 3], [1, 2]],
                    [[2, 4], [3, 1]]
                ]
            );
            break;
        case 6:
            rounds = roundRobin(players,
                [
                    [[1, 6], [2, 5], [3, 4]],
                    [[6, 4], [5, 3], [1, 2]],
                    [[2, 6], [3, 1], [4, 5]],
                    [[6, 5], [1, 4], [2, 3]],
                    [[3, 6], [4, 2], [5, 1]]
                ]
            );
            break;
        case 8:
            rounds = roundRobin(players,
                [
                    [[1, 8], [2, 7], [3, 6], [4, 5]],
                    [[8, 5], [6, 4], [7, 3], [1, 2]],
                    [[2, 8], [3, 1], [4, 7], [5, 6]],
                    [[8, 6], [7, 5], [1, 4], [2, 3]],
                    [[3, 8], [4, 2], [5, 1], [6, 7]],
                    [[8, 7], [1, 6], [2, 5], [3, 4]],
                    [[4, 8], [5, 3], [6, 2], [7, 1]]
                ]
            );
            break;
        case 10:
            rounds = roundRobin(players,
                [
                    [[1, 10], [2, 9], [3, 8], [4, 7], [5, 6]],
                    [[10, 6], [7, 5], [8, 4], [9, 3], [1, 2]],
                    [[2, 10], [3, 1], [4, 9], [5, 8], [6, 7]],
                    [[10, 7], [8, 6], [9, 5], [1, 4], [2, 3]],
                    [[3, 10], [4, 2], [5, 1], [6, 9], [7, 8]],
                    [[10, 8], [9, 7], [1, 6], [2, 5], [3, 4]],
                    [[4, 10], [5, 3], [6, 2], [7, 1], [8, 9]],
                    [[10, 9], [1, 8], [2, 7], [3, 6], [4, 5]],
                    [[5, 10], [6, 4], [7, 3], [8, 2], [9, 1]]
                ]
            );
            break;
        case 12:
            rounds = roundRobin(players,
                [
                    [[1, 12], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]],
                    [[12, 7], [8, 6], [9, 5], [10, 4], [11, 3], [1, 2]],
                    [[2, 12], [3, 1], [4, 11], [5, 10], [6, 9], [7, 8]],
                    [[12, 8], [9, 7], [10, 6], [11, 5], [1, 4], [2, 3]],
                    [[3, 12], [4, 2], [5, 1], [6, 11], [7, 10], [8, 9]],
                    [[12, 9], [10, 8], [11, 7], [1, 6], [2, 5], [3, 4]],
                    [[4, 12], [5, 3], [6, 2], [7, 1], [8, 11], [9, 10]],
                    [[12, 10], [11, 9], [1, 8], [2, 7], [3, 6], [4, 5]],
                    [[5, 12], [6, 4], [7, 3], [8, 2], [9, 1], [10, 11]],
                    [[12, 11], [1, 10], [2, 9], [3, 8], [4, 7], [5, 6]],
                    [[6, 12], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1]]
                ]
            );
            break;
        case 14:
            rounds = roundRobin(players,
                [
                    [[1, 14], [2, 13], [3, 12], [4, 11], [5, 10], [6, 9], [7, 8]],
                    [[14, 8], [9, 7], [10, 6], [11, 5], [12, 4], [13, 3], [1, 2]],
                    [[2, 14], [3, 1], [4, 13], [5, 12], [6, 11], [7, 10], [8, 9]],
                    [[14, 9], [10, 8], [11, 7], [12, 6], [13, 5], [1, 4], [2, 3]],
                    [[3, 14], [4, 2], [5, 1], [6, 13], [7, 12], [8, 11], [9, 10]],
                    [[14, 10], [11, 9], [12, 8], [13, 7], [1, 6], [2, 5], [3, 4]],
                    [[4, 14], [5, 3], [6, 2], [7, 1], [8, 13], [9, 12], [10, 11]],
                    [[14, 11], [12, 10], [13, 9], [1, 8], [2, 7], [3, 6], [4, 5]],
                    [[5, 14], [6, 4], [7, 3], [8, 2], [9, 1], [10, 13], [11, 12]],
                    [[14, 12], [13, 11], [1, 10], [2, 9], [3, 8], [4, 7], [5, 6]],
                    [[6, 14], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1], [12, 13]],
                    [[14, 13], [1, 12], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]],
                    [[7, 14], [8, 6], [9, 5], [10, 4], [11, 3], [12, 2], [13, 1]]
                ]
            );
            break;
        case 16:
            rounds = roundRobin(players,
                [
                    [[1, 16], [2, 15], [3, 14], [4, 13], [5, 12], [6, 11], [7, 10], [8, 9]],
                    [[16, 9], [10, 8], [11, 7], [12, 6], [13, 5], [14, 4], [15, 3], [1, 2]],
                    [[2, 16], [3, 1], [4, 15], [5, 14], [6, 13], [7, 12], [8, 11], [9, 10]],
                    [[16, 10], [11, 9], [12, 8], [13, 7], [14, 6], [15, 5], [1, 4], [2, 3]],
                    [[3, 16], [4, 2], [5, 1], [6, 15], [7, 14], [8, 13], [9, 12], [10, 11]],
                    [[16, 11], [12, 10], [13, 9], [14, 8], [15, 7], [1, 6], [2, 5], [3, 4]],
                    [[4, 16], [5, 3], [6, 2], [7, 1], [8, 15], [9, 14], [10, 13], [11, 12]],
                    [[16, 12], [13, 11], [14, 10], [15, 9], [1, 8], [2, 7], [3, 6], [4, 5]],
                    [[5, 16], [6, 4], [7, 3], [8, 2], [9, 1], [10, 15], [11, 14], [12, 13]],
                    [[16, 13], [14, 12], [15, 11], [1, 10], [2, 9], [3, 8], [4, 7], [5, 6]],
                    [[6, 16], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1], [12, 15], [13, 14]],
                    [[16, 14], [15, 13], [1, 12], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]],
                    [[7, 16], [8, 6], [9, 5], [10, 4], [11, 3], [12, 2], [13, 1], [14, 15]],
                    [[16, 15], [1, 14], [2, 13], [3, 12], [4, 11], [5, 10], [6, 9], [7, 8]],
                    [[8, 16], [9, 7], [10, 6], [11, 5], [12, 4], [13, 3], [14, 2], [15, 1]]
                ]
            );
            break;
        case 18:
            rounds = roundRobin(players,
            [
                [[1, 18], [2, 17], [3, 16], [4, 15], [5, 14], [6, 13], [7, 12], [8, 11], [9, 10]],
                [[18, 10], [11, 9], [12, 8], [13, 7], [14, 6], [15, 5], [16, 4], [17, 3], [1, 2]],
                [[2, 18], [3, 1], [4, 17], [5, 16], [6, 15], [7, 14], [8, 13], [9, 12], [10, 11]],
                [[18, 11], [12, 10], [13, 9], [14, 8], [15, 7], [16, 6], [17, 5], [1, 4], [2, 3]],
                [[3, 18], [4, 2], [5, 1], [6, 17], [7, 16], [8, 15], [9, 14], [10, 13], [11, 12]],
                [[18, 12], [13, 11], [14, 10], [15, 9], [16, 8], [17, 7], [1, 6], [2, 5], [3, 4]],
                [[4, 18], [5, 3], [6, 2], [7, 1], [8, 17], [9, 16], [10, 15], [11, 14], [12, 13]],
                [[18, 13], [14, 12], [15, 11], [16, 10], [17, 9], [1, 8], [2, 7], [3, 6], [4, 5]],
                [[5, 18], [6, 4], [7, 3], [8, 2], [9, 1], [10, 17], [11, 16], [12, 15], [13, 14]],
                [[18, 14], [15, 13], [16, 12], [17, 11], [1, 10], [2, 9], [3, 8], [4, 7], [5, 6]],
                [[6, 18], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1], [12, 17], [13, 16], [14, 15]],
                [[18, 15], [16, 14], [17, 13], [1, 12], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]],
                [[7, 18], [8, 6], [9, 5], [10, 4], [11, 3], [12, 2], [13, 1], [14, 17], [15, 16]],
                [[18, 16], [17, 15], [1, 14], [2, 13], [3, 12], [4, 11], [5, 10], [6, 9], [7, 8]],
                [[8, 18], [9, 7], [10, 6], [11, 5], [12, 4], [13, 3], [14, 2], [15, 1], [16, 17]],
                [[18, 17], [1, 16], [2, 15], [3, 14], [4, 13], [5, 12], [6, 11], [7, 10], [8, 9]],
                [[9, 18], [10, 8], [11, 7], [12, 6], [13, 5], [14, 4], [15, 3], [16, 2], [17, 1]]
            ]
            );
            break;
        case 20:
            rounds = roundRobin(players,
                [
                    [[1, 20], [2, 19], [3, 18], [4, 17], [5, 16], [6, 15], [7, 14], [8, 13], [9, 12], [10, 11]],
                    [[20, 11], [12, 10], [13, 9], [14, 8], [15, 7], [16, 6], [17, 5], [18, 4], [19, 3], [1, 2]],
                    [[2, 20], [3, 1], [4, 19], [5, 18], [6, 17], [7, 16], [8, 15], [9, 14], [10, 13], [11, 12]],
                    [[20, 12], [13, 11], [14, 10], [15, 9], [16, 8], [17, 7], [18, 6], [19, 5], [1, 4], [2, 3]],
                    [[3, 20], [4, 2], [5, 1], [6, 19], [7, 18], [8, 17], [9, 16], [10, 15], [11, 14], [12, 13]],
                    [[20, 13], [14, 12], [15, 11], [16, 10], [17, 9], [18, 8], [19, 7], [1, 6], [2, 5], [3, 4]],
                    [[4, 20], [5, 3], [6, 2], [7, 1], [8, 19], [9, 18], [10, 17], [11, 16], [12, 15], [13, 14]],
                    [[20, 14], [15, 13], [16, 12], [17, 11], [18, 10], [19, 9], [1, 8], [2, 7], [3, 6], [4, 5]],
                    [[5, 20], [6, 4], [7, 3], [8, 2], [9, 1], [10, 19], [11, 18], [12, 17], [13, 16], [14, 15]],
                    [[20, 15], [16, 14], [17, 13], [18, 12], [19, 11], [1, 10], [2, 9], [3, 8], [4, 7], [5, 6]],
                    [[6, 20], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1], [12, 19], [13, 18], [14, 17], [15, 16]],
                    [[20, 16], [17, 15], [18, 14], [19, 13], [1, 12], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]],
                    [[7, 20], [8, 6], [9, 5], [10, 4], [11, 3], [12, 2], [13, 1], [14, 19], [15, 18], [16, 17]],
                    [[20, 17], [18, 16], [19, 15], [1, 14], [2, 13], [3, 12], [4, 11], [5, 10], [6, 9], [7, 8]],
                    [[8, 20], [9, 7], [10, 6], [11, 5], [12, 4], [13, 3], [14, 2], [15, 1], [16, 19], [17, 18]],
                    [[20, 18], [19, 17], [1, 16], [2, 15], [3, 14], [4, 13], [5, 12], [6, 11], [7, 10], [8, 9]],
                    [[9, 20], [10, 8], [11, 7], [12, 6], [13, 5], [14, 4], [15, 3], [16, 2], [17, 1], [18, 19]],
                    [[20, 19], [1, 18], [2, 17], [3, 16], [4, 15], [5, 14], [6, 13], [7, 12], [8, 11], [9, 10]],
                    [[10, 20], [11, 9], [12, 8], [13, 7], [14, 6], [15, 5], [16, 4], [17, 3], [18, 2], [19, 1]]
                ]
            );
            break;
        case 22:
            rounds = roundRobin(players,
                [
                    [[1, 22], [2, 21], [3, 20], [4, 19], [5, 18], [6, 17], [7, 16], [8, 15], [9, 14], [10, 13], [11, 12]],
                    [[22, 12], [13, 11], [14, 10], [15, 9], [16, 8], [17, 7], [18, 6], [19, 5], [20, 4], [21, 3], [1, 2]],
                    [[2, 22], [3, 1], [4, 21], [5, 20], [6, 19], [7, 18], [8, 17], [9, 16], [10, 15], [11, 14], [12, 13]],
                    [[22, 13], [14, 12], [15, 11], [16, 10], [17, 9], [18, 8], [19, 7], [20, 6], [21, 5], [1, 4], [2, 3]],
                    [[3, 22], [4, 2], [5, 1], [6, 21], [7, 20], [8, 19], [9, 18], [10, 17], [11, 16], [12, 15], [13, 14]],
                    [[22, 14], [15, 13], [16, 12], [17, 11], [18, 10], [19, 9], [20, 8], [21, 7], [1, 6], [2, 5], [3, 4]],
                    [[4, 22], [5, 3], [6, 2], [7, 1], [8, 21], [9, 20], [10, 19], [11, 18], [12, 17], [13, 16], [14, 15]],
                    [[22, 15], [16, 14], [17, 13], [18, 12], [19, 11], [20, 10], [21, 9], [1, 8], [2, 7], [3, 6], [4, 5]],
                    [[5, 22], [6, 4], [7, 3], [8, 2], [9, 1], [10, 21], [11, 20], [12, 19], [13, 18], [14, 17], [15, 16]],
                    [[22, 16], [17, 15], [18, 14], [19, 13], [20, 12], [21, 11], [1, 10], [2, 9], [3, 8], [4, 7], [5, 6]],
                    [[6, 22], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1], [12, 21], [13, 20], [14, 19], [15, 18], [16, 17]],
                    [[22, 17], [18, 16], [19, 15], [20, 14], [21, 13], [1, 12], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]],
                    [[7, 22], [8, 6], [9, 5], [10, 4], [11, 3], [12, 2], [13, 1], [14, 21], [15, 20], [16, 19], [17, 18]],
                    [[22, 18], [19, 17], [20, 16], [21, 15], [1, 14], [2, 13], [3, 12], [4, 11], [5, 10], [6, 9], [7, 8]],
                    [[8, 22], [9, 7], [10, 6], [11, 5], [12, 4], [13, 3], [14, 2], [15, 1], [16, 21], [17, 20], [18, 19]],
                    [[22, 19], [20, 18], [21, 17], [1, 16], [2, 15], [3, 14], [4, 13], [5, 12], [6, 11], [7, 10], [8, 9]],
                    [[9, 22], [10, 8], [11, 7], [12, 6], [13, 5], [14, 4], [15, 3], [16, 2], [17, 1], [18, 21], [19, 20]],
                    [[22, 20], [21, 19], [1, 18], [2, 17], [3, 16], [4, 15], [5, 14], [6, 13], [7, 12], [8, 11], [9, 10]],
                    [[10, 22], [11, 9], [12, 8], [13, 7], [14, 6], [15, 5], [16, 4], [17, 3], [18, 2], [19, 1], [20, 21]],
                    [[22, 21], [1, 20], [2, 19], [3, 18], [4, 17], [5, 16], [6, 15], [7, 14], [8, 13], [9, 12], [10, 11]],
                    [[11, 22], [12, 10], [13, 9], [14, 8], [15, 7], [16, 6], [17, 5], [18, 4], [19, 3], [20, 2], [21, 1]]
                ]
            );
            break;
        case 24:
            rounds = roundRobin(players,
                [
                    [[1, 24], [2, 23], [3, 22], [4, 21], [5, 20], [6, 19], [7, 18], [8, 17], [9, 16], [10, 15], [11, 14], [12, 13]],
                    [[24, 13], [14, 12], [15, 11], [16, 10], [17, 9], [18, 8], [19, 7], [20, 6], [21, 5], [22, 4], [23, 3], [1, 2]],
                    [[2, 24], [3, 1], [4, 23], [5, 22], [6, 21], [7, 20], [8, 19], [9, 18], [10, 17], [11, 16], [12, 15], [13, 14]],
                    [[24, 14], [15, 13], [16, 12], [17, 11], [18, 10], [19, 9], [20, 8], [21, 7], [22, 6], [23, 5], [1, 4], [2, 3]],
                    [[3, 24], [4, 2], [5, 1], [6, 23], [7, 22], [8, 21], [9, 20], [10, 19], [11, 18], [12, 17], [13, 16], [14, 15]],
                    [[24, 15], [16, 14], [17, 13], [18, 12], [19, 11], [20, 10], [21, 9], [22, 8], [23, 7], [1, 6], [2, 5], [3, 4]],
                    [[4, 24], [5, 3], [6, 2], [7, 1], [8, 23], [9, 22], [10, 21], [11, 20], [12, 19], [13, 18], [14, 17], [15, 16]],
                    [[24, 16], [17, 15], [18, 14], [19, 13], [20, 12], [21, 11], [22, 10], [23, 9], [1, 8], [2, 7], [3, 6], [4, 5]],
                    [[5, 24], [6, 4], [7, 3], [8, 2], [9, 1], [10, 23], [11, 22], [12, 21], [13, 20], [14, 19], [15, 18], [16, 17]],
                    [[24, 17], [18, 16], [19, 15], [20, 14], [21, 13], [22, 12], [23, 11], [1, 10], [2, 9], [3, 8], [4, 7], [5, 6]],
                    [[6, 24], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1], [12, 23], [13, 22], [14, 21], [15, 20], [16, 19], [17, 18]],
                    [[24, 18], [19, 17], [20, 16], [21, 15], [22, 14], [23, 13], [1, 12], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]],
                    [[7, 24], [8, 6], [9, 5], [10, 4], [11, 3], [12, 2], [13, 1], [14, 23], [15, 22], [16, 21], [17, 20], [18, 19]],
                    [[24, 19], [20, 18], [21, 17], [22, 16], [23, 15], [1, 14], [2, 13], [3, 12], [4, 11], [5, 10], [6, 9], [7, 8]],
                    [[8, 24], [9, 7], [10, 6], [11, 5], [12, 4], [13, 3], [14, 2], [15, 1], [16, 23], [17, 22], [18, 21], [19, 20]],
                    [[24, 20], [21, 19], [22, 18], [23, 17], [1, 16], [2, 15], [3, 14], [4, 13], [5, 12], [6, 11], [7, 10], [8, 9]],
                    [[9, 24], [10, 8], [11, 7], [12, 6], [13, 5], [14, 4], [15, 3], [16, 2], [17, 1], [18, 23], [19, 22], [20, 21]],
                    [[24, 21], [22, 20], [23, 19], [1, 18], [2, 17], [3, 16], [4, 15], [5, 14], [6, 13], [7, 12], [8, 11], [9, 10]],
                    [[10, 24], [11, 9], [12, 8], [13, 7], [14, 6], [15, 5], [16, 4], [17, 3], [18, 2], [19, 1], [20, 23], [21, 22]],
                    [[24, 22], [23, 21], [1, 20], [2, 19], [3, 18], [4, 17], [5, 16], [6, 15], [7, 14], [8, 13], [9, 12], [10, 11]],
                    [[11, 24], [12, 10], [13, 9], [14, 8], [15, 7], [16, 6], [17, 5], [18, 4], [19, 3], [20, 2], [21, 1], [22, 23]],
                    [[24, 23], [1, 22], [2, 21], [3, 20], [4, 19], [5, 18], [6, 17], [7, 16], [8, 15], [9, 14], [10, 13], [11, 12]],
                    [[12, 24], [13, 11], [14, 10], [15, 9], [16, 8], [17, 7], [18, 6], [19, 5], [20, 4], [21, 3], [22, 2], [23, 1]]
                ]
            );
            break;
        case 26:
            rounds = roundRobin(players,
                [
                    [[1, 26], [2, 25], [3, 24], [4, 23], [5, 22], [6, 21], [7, 20], [8, 19], [9, 18], [10, 17], [11, 16], [12, 15], [13, 14]],
                    [[26, 14], [15, 13], [16, 12], [17, 11], [18, 10], [19, 9], [20, 8], [21, 7], [22, 6], [23, 5], [24, 4], [25, 3], [1, 2]],
                    [[2, 26], [3, 1], [4, 25], [5, 24], [6, 23], [7, 22], [8, 21], [9, 20], [10, 19], [11, 18], [12, 17], [13, 16], [14, 15]],
                    [[26, 15], [16, 14], [17, 13], [18, 12], [19, 11], [20, 10], [21, 9], [22, 8], [23, 7], [24, 6], [25, 5], [1, 4], [2, 3]],
                    [[3, 26], [4, 2], [5, 1], [6, 25], [7, 24], [8, 23], [9, 22], [10, 21], [11, 20], [12, 19], [13, 18], [14, 17], [15, 16]],
                    [[26, 16], [17, 15], [18, 14], [19, 13], [20, 12], [21, 11], [22, 10], [23, 9], [24, 8], [25, 7], [1, 6], [2, 5], [3, 4]],
                    [[4, 26], [5, 3], [6, 2], [7, 1], [8, 25], [9, 24], [10, 23], [11, 22], [12, 21], [13, 20], [14, 19], [15, 18], [16, 17]],
                    [[26, 17], [18, 16], [19, 15], [20, 14], [21, 13], [22, 12], [23, 11], [24, 10], [25, 9], [1, 8], [2, 7], [3, 6], [4, 5]],
                    [[5, 26], [6, 4], [7, 3], [8, 2], [9, 1], [10, 25], [11, 24], [12, 23], [13, 22], [14, 21], [15, 20], [16, 19], [17, 18]],
                    [[26, 18], [19, 17], [20, 16], [21, 15], [22, 14], [23, 13], [24, 12], [25, 11], [1, 10], [2, 9], [3, 8], [4, 7], [5, 6]],
                    [[6, 26], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1], [12, 25], [13, 24], [14, 23], [15, 22], [16, 21], [17, 20], [18, 19]],
                    [[26, 19], [20, 18], [21, 17], [22, 16], [23, 15], [24, 14], [25, 13], [1, 12], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]],
                    [[7, 26], [8, 6], [9, 5], [10, 4], [11, 3], [12, 2], [13, 1], [14, 25], [15, 24], [16, 23], [17, 22], [18, 21], [19, 20]],
                    [[26, 20], [21, 19], [22, 18], [23, 17], [24, 16], [25, 15], [1, 14], [2, 13], [3, 12], [4, 11], [5, 10], [6, 9], [7, 8]],
                    [[8, 26], [9, 7], [10, 6], [11, 5], [12, 4], [13, 3], [14, 2], [15, 1], [16, 25], [17, 24], [18, 23], [19, 22], [20, 21]],
                    [[26, 21], [22, 20], [23, 19], [24, 18], [25, 17], [1, 16], [2, 15], [3, 14], [4, 13], [5, 12], [6, 11], [7, 10], [8, 9]],
                    [[9, 26], [10, 8], [11, 7], [12, 6], [13, 5], [14, 4], [15, 3], [16, 2], [17, 1], [18, 25], [19, 24], [20, 23], [21, 22]],
                    [[26, 22], [23, 21], [24, 20], [25, 19], [1, 18], [2, 17], [3, 16], [4, 15], [5, 14], [6, 13], [7, 12], [8, 11], [9, 10]],
                    [[10, 26], [11, 9], [12, 8], [13, 7], [14, 6], [15, 5], [16, 4], [17, 3], [18, 2], [19, 1], [20, 25], [21, 24], [22, 23]],
                    [[26, 23], [24, 22], [25, 21], [1, 20], [2, 19], [3, 18], [4, 17], [5, 16], [6, 15], [7, 14], [8, 13], [9, 12], [10, 11]],
                    [[11, 26], [12, 10], [13, 9], [14, 8], [15, 7], [16, 6], [17, 5], [18, 4], [19, 3], [20, 2], [21, 1], [22, 25], [23, 24]],
                    [[26, 24], [25, 23], [1, 22], [2, 21], [3, 20], [4, 19], [5, 18], [6, 17], [7, 16], [8, 15], [9, 14], [10, 13], [11, 12]],
                    [[12, 26], [13, 11], [14, 10], [15, 9], [16, 8], [17, 7], [18, 6], [19, 5], [20, 4], [21, 3], [22, 2], [23, 1], [24, 25]],
                    [[26, 25], [1, 24], [2, 23], [3, 22], [4, 21], [5, 20], [6, 19], [7, 18], [8, 17], [9, 16], [10, 15], [11, 14], [12, 13]],
                    [[13, 26], [14, 12], [15, 11], [16, 10], [17, 9], [18, 8], [19, 7], [20, 6], [21, 5], [22, 4], [23, 3], [24, 2], [25, 1]]
                ]
            );
            break;
        case 28:
            rounds = roundRobin(players,
                [
                    [[1, 28], [2, 27], [3, 26], [4, 25], [5, 24], [6, 23], [7, 22], [8, 21], [9, 20], [10, 19], [11, 18], [12, 17], [13, 16], [14, 15]],
                    [[28, 15], [16, 14], [17, 13], [18, 12], [19, 11], [20, 10], [21, 9], [22, 8], [23, 7], [24, 6], [25, 5], [26, 4], [27, 3], [1, 2]],
                    [[2, 28], [3, 1], [4, 27], [5, 26], [6, 25], [7, 24], [8, 23], [9, 22], [10, 21], [11, 20], [12, 19], [13, 18], [14, 17], [15, 16]],
                    [[28, 16], [17, 15], [18, 14], [19, 13], [20, 12], [21, 11], [22, 10], [23, 9], [24, 8], [25, 7], [26, 6], [27, 5], [1, 4], [2, 3]],
                    [[3, 28], [4, 2], [5, 1], [6, 27], [7, 26], [8, 25], [9, 24], [10, 23], [11, 22], [12, 21], [13, 20], [14, 19], [15, 18], [16, 17]],
                    [[28, 17], [18, 16], [19, 15], [20, 14], [21, 13], [22, 12], [23, 11], [24, 10], [25, 9], [26, 8], [27, 7], [1, 6], [2, 5], [3, 4]],
                    [[4, 28], [5, 3], [6, 2], [7, 1], [8, 27], [9, 26], [10, 25], [11, 24], [12, 23], [13, 22], [14, 21], [15, 20], [16, 19], [17, 18]],
                    [[28, 18], [19, 17], [20, 16], [21, 15], [22, 14], [23, 13], [24, 12], [25, 11], [26, 10], [27, 9], [1, 8], [2, 7], [3, 6], [4, 5]],
                    [[5, 28], [6, 4], [7, 3], [8, 2], [9, 1], [10, 27], [11, 26], [12, 25], [13, 24], [14, 23], [15, 22], [16, 21], [17, 20], [18, 19]],
                    [[28, 19], [20, 18], [21, 17], [22, 16], [23, 15], [24, 14], [25, 13], [26, 12], [27, 11], [1, 10], [2, 9], [3, 8], [4, 7], [5, 6]],
                    [[6, 28], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1], [12, 27], [13, 26], [14, 25], [15, 24], [16, 23], [17, 22], [18, 21], [19, 20]],
                    [[28, 20], [21, 19], [22, 18], [23, 17], [24, 16], [25, 15], [26, 14], [27, 13], [1, 12], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]],
                    [[7, 28], [8, 6], [9, 5], [10, 4], [11, 3], [12, 2], [13, 1], [14, 27], [15, 26], [16, 25], [17, 24], [18, 23], [19, 22], [20, 21]],
                    [[28, 21], [22, 20], [23, 19], [24, 18], [25, 17], [26, 16], [27, 15], [1, 14], [2, 13], [3, 12], [4, 11], [5, 10], [6, 9], [7, 8]],
                    [[8, 28], [9, 7], [10, 6], [11, 5], [12, 4], [13, 3], [14, 2], [15, 1], [16, 27], [17, 26], [18, 25], [19, 24], [20, 23], [21, 22]],
                    [[28, 22], [23, 21], [24, 20], [25, 19], [26, 18], [27, 17], [1, 16], [2, 15], [3, 14], [4, 13], [5, 12], [6, 11], [7, 10], [8, 9]],
                    [[9, 28], [10, 8], [11, 7], [12, 6], [13, 5], [14, 4], [15, 3], [16, 2], [17, 1], [18, 27], [19, 26], [20, 25], [21, 24], [22, 23]],
                    [[28, 23], [24, 22], [25, 21], [26, 20], [27, 19], [1, 18], [2, 17], [3, 16], [4, 15], [5, 14], [6, 13], [7, 12], [8, 11], [9, 10]],
                    [[10, 28], [11, 9], [12, 8], [13, 7], [14, 6], [15, 5], [16, 4], [17, 3], [18, 2], [19, 1], [20, 27], [21, 26], [22, 25], [23, 24]],
                    [[28, 24], [25, 23], [26, 22], [27, 21], [1, 20], [2, 19], [3, 18], [4, 17], [5, 16], [6, 15], [7, 14], [8, 13], [9, 12], [10, 11]],
                    [[11, 28], [12, 10], [13, 9], [14, 8], [15, 7], [16, 6], [17, 5], [18, 4], [19, 3], [20, 2], [21, 1], [22, 27], [23, 26], [24, 25]],
                    [[28, 25], [26, 24], [27, 23], [1, 22], [2, 21], [3, 20], [4, 19], [5, 18], [6, 17], [7, 16], [8, 15], [9, 14], [10, 13], [11, 12]],
                    [[12, 28], [13, 11], [14, 10], [15, 9], [16, 8], [17, 7], [18, 6], [19, 5], [20, 4], [21, 3], [22, 2], [23, 1], [24, 27], [25, 26]],
                    [[28, 26], [27, 25], [1, 24], [2, 23], [3, 22], [4, 21], [5, 20], [6, 19], [7, 18], [8, 17], [9, 16], [10, 15], [11, 14], [12, 13]],
                    [[13, 28], [14, 12], [15, 11], [16, 10], [17, 9], [18, 8], [19, 7], [20, 6], [21, 5], [22, 4], [23, 3], [24, 2], [25, 1], [26, 27]],
                    [[28, 27], [1, 26], [2, 25], [3, 24], [4, 23], [5, 22], [6, 21], [7, 20], [8, 19], [9, 18], [10, 17], [11, 16], [12, 15], [13, 14]],
                    [[14, 28], [15, 13], [16, 12], [17, 11], [18, 10], [19, 9], [20, 8], [21, 7], [22, 6], [23, 5], [24, 4], [25, 3], [26, 2], [27, 1]]
                ]
            );
            break;
        case 30:
            rounds = roundRobin(players,
                [
                    [[1, 30], [2, 29], [3, 28], [4, 27], [5, 26], [6, 25], [7, 24], [8, 23], [9, 22], [10, 21], [11, 20], [12, 19], [13, 18], [14, 17], [15, 16]],
                    [[30, 16], [17, 15], [18, 14], [19, 13], [20, 12], [21, 11], [22, 10], [23, 9], [24, 8], [25, 7], [26, 6], [27, 5], [28, 4], [29, 3], [1, 2]],
                    [[2, 30], [3, 1], [4, 29], [5, 28], [6, 27], [7, 26], [8, 25], [9, 24], [10, 23], [11, 22], [12, 21], [13, 20], [14, 19], [15, 18], [16, 17]],
                    [[30, 17], [18, 16], [19, 15], [20, 14], [21, 13], [22, 12], [23, 11], [24, 10], [25, 9], [26, 8], [27, 7], [28, 6], [29, 5], [1, 4], [2, 3]],
                    [[3, 30], [4, 2], [5, 1], [6, 29], [7, 28], [8, 27], [9, 26], [10, 25], [11, 24], [12, 23], [13, 22], [14, 21], [15, 20], [16, 19], [17, 18]],
                    [[30, 18], [19, 17], [20, 16], [21, 15], [22, 14], [23, 13], [24, 12], [25, 11], [26, 10], [27, 9], [28, 8], [29, 7], [1, 6], [2, 5], [3, 4]],
                    [[4, 30], [5, 3], [6, 2], [7, 1], [8, 29], [9, 28], [10, 27], [11, 26], [12, 25], [13, 24], [14, 23], [15, 22], [16, 21], [17, 20], [18, 19]],
                    [[30, 19], [20, 18], [21, 17], [22, 16], [23, 15], [24, 14], [25, 13], [26, 12], [27, 11], [28, 10], [29, 9], [1, 8], [2, 7], [3, 6], [4, 5]],
                    [[5, 30], [6, 4], [7, 3], [8, 2], [9, 1], [10, 29], [11, 28], [12, 27], [13, 26], [14, 25], [15, 24], [16, 23], [17, 22], [18, 21], [19, 20]],
                    [[30, 20], [21, 19], [22, 18], [23, 17], [24, 16], [25, 15], [26, 14], [27, 13], [28, 12], [29, 11], [1, 10], [2, 9], [3, 8], [4, 7], [5, 6]],
                    [[6, 30], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1], [12, 29], [13, 28], [14, 27], [15, 26], [16, 25], [17, 24], [18, 23], [19, 22], [20, 21]],
                    [[30, 21], [22, 20], [23, 19], [24, 18], [25, 17], [26, 16], [27, 15], [28, 14], [29, 13], [1, 12], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]],
                    [[7, 30], [8, 6], [9, 5], [10, 4], [11, 3], [12, 2], [13, 1], [14, 29], [15, 28], [16, 27], [17, 26], [18, 25], [19, 24], [20, 23], [21, 22]],
                    [[30, 22], [23, 21], [24, 20], [25, 19], [26, 18], [27, 17], [28, 16], [29, 15], [1, 14], [2, 13], [3, 12], [4, 11], [5, 10], [6, 9], [7, 8]],
                    [[8, 30], [9, 7], [10, 6], [11, 5], [12, 4], [13, 3], [14, 2], [15, 1], [16, 29], [17, 28], [18, 27], [19, 26], [20, 25], [21, 24], [22, 23]],
                    [[30, 23], [24, 22], [25, 21], [26, 20], [27, 19], [28, 18], [29, 17], [1, 16], [2, 15], [3, 14], [4, 13], [5, 12], [6, 11], [7, 10], [8, 9]],
                    [[9, 30], [10, 8], [11, 7], [12, 6], [13, 5], [14, 4], [15, 3], [16, 2], [17, 1], [18, 29], [19, 28], [20, 27], [21, 26], [22, 25], [23, 24]],
                    [[30, 24], [25, 23], [26, 22], [27, 21], [28, 20], [29, 19], [1, 18], [2, 17], [3, 16], [4, 15], [5, 14], [6, 13], [7, 12], [8, 11], [9, 10]],
                    [[10, 30], [11, 9], [12, 8], [13, 7], [14, 6], [15, 5], [16, 4], [17, 3], [18, 2], [19, 1], [20, 29], [21, 28], [22, 27], [23, 26], [24, 25]],
                    [[30, 25], [26, 24], [27, 23], [28, 22], [29, 21], [1, 20], [2, 19], [3, 18], [4, 17], [5, 16], [6, 15], [7, 14], [8, 13], [9, 12], [10, 11]],
                    [[11, 30], [12, 10], [13, 9], [14, 8], [15, 7], [16, 6], [17, 5], [18, 4], [19, 3], [20, 2], [21, 1], [22, 29], [23, 28], [24, 27], [25, 26]],
                    [[30, 26], [27, 25], [28, 24], [29, 23], [1, 22], [2, 21], [3, 20], [4, 19], [5, 18], [6, 17], [7, 16], [8, 15], [9, 14], [10, 13], [11, 12]],
                    [[12, 30], [13, 11], [14, 10], [15, 9], [16, 8], [17, 7], [18, 6], [19, 5], [20, 4], [21, 3], [22, 2], [23, 1], [24, 29], [25, 28], [26, 27]],
                    [[30, 27], [28, 26], [29, 25], [1, 24], [2, 23], [3, 22], [4, 21], [5, 20], [6, 19], [7, 18], [8, 17], [9, 16], [10, 15], [11, 14], [12, 13]],
                    [[13, 30], [14, 12], [15, 11], [16, 10], [17, 9], [18, 8], [19, 7], [20, 6], [21, 5], [22, 4], [23, 3], [24, 2], [25, 1], [26, 29], [27, 28]],
                    [[30, 28], [29, 27], [1, 26], [2, 25], [3, 24], [4, 23], [5, 22], [6, 21], [7, 20], [8, 19], [9, 18], [10, 17], [11, 16], [12, 15], [13, 14]],
                    [[14, 30], [15, 13], [16, 12], [17, 11], [18, 10], [19, 9], [20, 8], [21, 7], [22, 6], [23, 5], [24, 4], [25, 3], [26, 2], [27, 1], [28, 29]],
                    [[30, 29], [1, 28], [2, 27], [3, 26], [4, 25], [5, 24], [6, 23], [7, 22], [8, 21], [9, 20], [10, 19], [11, 18], [12, 17], [13, 16], [14, 15]],
                    [[15, 30], [16, 14], [17, 13], [18, 12], [19, 11], [20, 10], [21, 9], [22, 8], [23, 7], [24, 6], [25, 5], [26, 4], [27, 3], [28, 2], [29, 1]]
                ]
            );
            break;
        default:
            throw 'This number of players ' + '(' + players.length + ') is not supported in round robin! Round robin works for 3-30 players.';
    }

    return rounds;
}

function roundRobin(players, formula) {
    let rounds = [];

    for (let round = 0; round < formula.length; round++) {
        rounds[round] = [];
    }

    for (let round = 0; round < formula.length; round++) {
        rounds[round] = rounds[round] ? [] : rounds[round];
        for (let match = 0; match < formula[round].length; match++) {

            // if match contains bye, skip it
            if (players[formula[round][match][0] - 1] === 'BYE'
                || players[formula[round][match][1] - 1] === 'BYE') {
                continue;
            }

            rounds[round][match] = {
                black: players[formula[round][match][0] - 1],
                result: 0,
                white: players[formula[round][match][1] - 1]
            };
        }
    }

    // remove empty matches:
    let cleanRounds = [];

    rounds.forEach(round => {
        let cleanRound = [];

        round.forEach(match => {
            if (match) {
                cleanRound.push(match);
            }
        });
        
        cleanRounds.push(cleanRound);
    });

    return cleanRounds;
}