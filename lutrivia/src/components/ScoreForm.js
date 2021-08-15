import React from 'react';

class ScoreForm extends React.Component {
    state = {
        namme: ""
    }

    handleChange = e => {
        this.setState({name: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}