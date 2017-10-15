import React, {Component} from 'react';
import ComputerPlayer from '../shared/ComputerPlayer';
import Score from '../shared/Score';

class CompVSComp extends Component {
    componentWillMount() {
        this.props.setGameScores();
    }
    render() {
        return (
            <div className="wrapper">
    
                <a className="btn" onClick={this.props.startGame}>Start Game</a>
    
                <a className="btn left" onClick={this.props.getAltConfig}>Add spock and lizard</a>
    
                <div className="game">
                    <ComputerPlayer items={this.props.items} current={this.props.player1Choice} />
                    <Score scores={this.props.scores} />
                    <ComputerPlayer items={this.props.items} current={this.props.player2Choice} />
                </div>
            </div>
        );
    }
}

export default CompVSComp;
