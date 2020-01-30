import React from 'react';
import style from'./AnswerItem.css'

const AnswerItem = props => {
    const cls = [style.AnswerItem];
    if (props.answerState) {
        cls.push(`${style[props.answerState]}`)
    }
    return (
        <li className={cls.join(' ')} onClick={() => props.onAnswerClick(props.answer.id)}>
            {props.answer.id}. {props.answer.text}
        </li>
    )
};
export default AnswerItem