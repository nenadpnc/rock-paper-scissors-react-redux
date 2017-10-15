import {connect} from 'react-redux';
import HumanVSComp from './HumanVsComp';
import {conf2} from '../shared/gameConfiguration';
import {
    gameStart, 
    setPlayer1Choice, 
    setPlayer2Choice,
    evaluateResult, 
    loadAltConfiguration,
    setItems,
    setScores
} from '../shared/actions';

let shuffleInterval;
let items = [];

const shuffle = (dispatch) => {
    shuffleInterval = setInterval(() => {
        dispatch(setPlayer2Choice(randomComputerResult()));
    }, 500);
}

const startGame = (dispatch) => {
    dispatch(gameStart(true));
    shuffle(dispatch);
}

const randomComputerResult = () => {
    return items[Math.floor(Math.random() * items.length)];
}

const onHumanSelect = (dispatch, humanChoice) => {
    clearInterval(shuffleInterval);
    const computerChoice = randomComputerResult();
    dispatch(gameStart(false));
    dispatch(setPlayer2Choice(computerChoice));
    dispatch(setPlayer1Choice(humanChoice));
    dispatch(evaluateResult('humanVSComp'));
}

const getAltConfig = (dispatch) => {
    dispatch(loadAltConfiguration(conf2));
    dispatch(setItems(Object.keys(conf2)));
}

const mapStateToProps = state => {
    items = state.items;
    return {
        items: state.items, 
        gameStarted: state.gameStarted,
        scores: state.scores,
        player1Choice: state.player1Choice,
        player2Choice: state.player2Choice
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        startGame: () => startGame(dispatch),
        onHumanSelect: (item) => onHumanSelect(dispatch, item),
        getAltConfig: () => getAltConfig(dispatch),
        setGameScores: () => dispatch(setScores(JSON.parse(localStorage.getItem('humanVSComp'))))
    }   
}

const HumanVSCompContainer = connect(mapStateToProps, mapDispatchToProps)(HumanVSComp);

export default HumanVSCompContainer;