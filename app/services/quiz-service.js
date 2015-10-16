
import { setQuizStatus } from 'actions/app-actions';

import { 
    setCurrentQuestion,
    addAnswer,
    reset as resetQuiz 
} from 'actions/quiz-actions';

export function start() {
    return (dispatch, getState) => {
        dispatch(resetQuiz());
        dispatch(setQuizStatus(true));
    };
}

export function abort() {
    return (dispatch, getState) => {
        dispatch(setQuizStatus(false));
    };
}

// validates current step
// moves to next question !! need validation here!
export function answer(payload = {}) {
    return (dispatch, getState) => {
        var { quiz } = getState();
        var nextQuestion = quiz.currentQuestion + 1;
        dispatch(addAnswer(payload));

        if (nextQuestion <= quiz.questions) {
            dispatch(setCurrentQuestion(nextQuestion));
        } else {
            dispatch(abort());
        }
    };   
}
