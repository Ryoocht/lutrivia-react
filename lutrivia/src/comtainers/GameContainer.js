import { Component } from 'react';
import Header from '../components/Header';
import QuestionList from '../components/QuestionList';
import ScoreForm from '../components/ScoreForm';
import data from '../data.js';

class GameContainer extends Component {
    state = {
        score: 0,
        questions: data.questions
    }

    newGame = () => {
        this.setState({score: 0})
    }

    updataScore = value => {
        this.setState(state => {
            return {
                score: state.score + value
            }
        })
    }

    render(){
        return(
            <>
                <Header newGame={this.newGame} score={this.state.score}/>
                <QuestionList questions={this.state.questions} score={this.state.score} updataScore={this.updataScore}/>
            </>
        )
    }
}

export default GameContainer;