import React from 'react';
import Question from './Question';

const QuestionList = ({questions, updateScore}) => {
    return(
        questions.map(question => <Question question={question} updateScore={updateScore} />)
    )
}

export default QuestionList;