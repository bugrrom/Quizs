import React from 'react'
import style from './ActiveQuiz.css'
import AnswerList from './AnswersList/AnswerList';

const ActiveQuiz = props => {
    return (
        <div className={style.ActiveQuiz}>
            <p className={style.Question}>
                <span>
                    <strong>{props.numberQuestion}. </strong>&nbsp;
                    {props.question}
                </span>
                <small>{props.numberQuestion} из {props.quizLength}</small>
            </p>
            <AnswerList
                answerState={props.answerState}
                answer={props.answer}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )
};
export default ActiveQuiz