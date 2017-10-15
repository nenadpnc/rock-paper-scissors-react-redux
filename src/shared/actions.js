export const setItems = (items) => {
    return {
        type: 'SET_ITEMS',
        items
    }
}

export const gameStart = (isStarted) => {
    return {
        type: 'START_GAME',
        isStarted
    }
};

export const setPlayer1Choice = (choice) => {
    return {
        type: 'PLAYER1_CHOICE',
        choice
    }
}

export const setPlayer2Choice = (choice) => {
    return {
        type: 'PLAYER2_CHOICE',
        choice
    }
}

export const evaluateResult = (key) => {
    return {
        type: 'EVAL_RESULT',
        key
    }
}

export const loadAltConfiguration = (conf) => {
    return {
        type: 'LOAD_CONFIG',
        conf
    }
}

export const setScores = (scores) => {
    return {
        type: 'SET_SCORES',
        scores
    }
}