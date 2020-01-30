import React from 'react';
import style from './AnswersList.css'
import AnswerItem from './AnswerItem/AnswerItem';

const AnswerList = props => {
    return (
        <ul className={style.AnswersList}>
            {props.answer.map((answer, index) => {
                return (
                    <AnswerItem
                        key={index}
                        answer={answer}
                        onAnswerClick={props.onAnswerClick}
                        answerState={props.answerState ? props.answerState[answer.id] : null}
                    />
                )
            })}
        </ul>
    )
};
export default AnswerList