import React from 'react';

const Header = props => {
    return(
        <div>
            <h1>Lutrivia</h1>
            <h2>How to play: Select either true or false for each question</h2>
            <button onClick={props.newGame}>New Game</button>
            <p>Score: {props.score}</p>
        </div>
    )
}

export default Header;