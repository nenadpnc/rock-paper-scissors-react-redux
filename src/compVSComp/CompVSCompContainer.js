import {connect} from 'react-redux';
import CompVSComp from './CompVSComp';
import {conf2} from '../shared/gameConfiguration';
import {
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
        dispatch(setPlayer1Choice(randomComputerResult()));
        dispatch(setPlayer2Choice(randomComputerResult()));
    }, 500);
}

const startGame = (dispatch) => {
    shuffle(dispatch);
    setTimeout(() => {
        finish(dispatch);
    }, 3000);
}

const finish = (dispatch) => {
    clearInterval(shuffleInterval);
    dispatch(setPlayer2Choice(randomComputerResult()));
    dispatch(setPlayer1Choice(randomComputerResult()));
    dispatch(evaluateResult('compVSComp'));
}

const randomComputerResult = () => {
    return items[Math.floor(Math.random() * items.length)];
}

const getAltConfig = (dispatch) => {
    dispatch(loadAltConfiguration(conf2));
    dispatch(setItems(Object.keys(conf2)));
}

const mapStateToProps = state => {
    items = state.items;
    return {
        items: state.items,
        scores: state.scores,
        player1Choice: state.player1Choice,
        player2Choice: state.player2Choice
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        startGame: () => startGame(dispatch),
        getAltConfig: () => getAltConfig(dispatch),
        setGameScores: () => dispatch(setScores(JSON.parse(localStorage.getItem('compVSComp'))))
    }   
}

const CompVSCompContainer = connect(mapStateToProps, mapDispatchToProps)(CompVSComp);

export default CompVSCompContainer;