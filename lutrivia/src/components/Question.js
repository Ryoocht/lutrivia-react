import { Component } from 'react';
import '../App.css'
import Button from './Button'

class Question extends Component {
    state = {
        answered: false
    }

    handleClick = e => {
        const buttonVal = e.target.name === "true" ? true : false;
        this.setState({answered: true})

        if(buttonVal === this.props.question.answer){
            this.setState({isCorrect: true})
            this.props.updateScore(1)
        } else {
            this.setState({isCorrect: false})
        }
    }

    render(){
        return(
            <div className="question-card">
                {this.props.question.text}
                <div>
                    <Button handleClick={this.handleClick} isCorrect={this.props.question.answer === true? true: false} text="True" name="true" answered={this.state.answered}/>
                    <Button handleClick={this.handleClick} isCorrect={this.props.question.answer === false? true:false} text="False" name="false" answered={this.state.answered}/>
                </div>
            </div>
        )
    }
}

export default Question;