import React from 'react';
import style from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import {connect} from 'react-redux';
import {fetchQuizById, quizAnswerClick, retryQuiz} from '../../store/actions/quiz';
import PropTypes from 'prop-types';

class Quiz extends React.Component {

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.retryQuiz()
    }

    render() {
        return (
            <div className={style.Quiz}>
                <h1>Ответьте на все вопросы</h1>
                <div>
                    {this.props.loading || !this.props.quiz
                        ? <Loader/>
                        : this.props.isFinished ?
                            <FinishedQuiz
                                results={this.props.results}
                                quiz={this.props.quiz}
                                onRetry={this.props.retryQuiz}
                            /> :
                            <ActiveQuiz answer={this.props.quiz[this.props.numberQuestion].answers}
                                        question={this.props.quiz[this.props.numberQuestion].question}
                                        quizLength={this.props.quiz.length}
                                        numberQuestion={this.props.numberQuestion + 1}
                                        answerState={this.props.answerState}
                                        onAnswerClick={this.props.quizAnswerClick}
                            />
                    }
                </div>
            </div>
        )
    }

}

Quiz.propTypes = {
    results: PropTypes.object,
    isFinished: PropTypes.bool,
    numberQuestion: PropTypes.number,
    answerState: PropTypes.object,
    quiz: PropTypes.array,
    loading: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        numberQuestion: state.quiz.numberQuestion,
        answerState: state.quiz.answerState,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    }
}

function mapDispatchProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }

}

export default connect(mapStateToProps, mapDispatchProps)(Quiz)