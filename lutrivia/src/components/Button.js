import { Component } from 'react';

class Button extends Component {
    state = {
        btnClass: ""
    }

    onClick = e => {
        this.props.handleClick(e)
        if(this.props.isCorrect === true){
            this.setState({btnClass: "correct"})
        } else {
            this.setState({btnClass: "incorrect"})
        }
    }

    render(){
        return(
            <button className={`btn ${this.state.btnClass}`} name={this.props.name} onClick={this.onClick} disabled={this.props.answered}>
                {this.props.text}
            </button>
        )
    }
}

export default Button;