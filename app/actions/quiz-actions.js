
export const SET_CURRENT_QUESTION = 'quiz@setCurrentQuestion';
export const ADD_ANSWER = 'quiz@addAnswer';
export const RESET = 'quiz@reset';

export function setCurrentQuestion(questionIndex) {
    return {
        type: SET_CURRENT_QUESTION,
        questionIndex
    };
}

export function addAnswer(questionId, answer) {
    return {
        type: ADD_ANSWER,
        questionId,
        answer
    };
}

export function reset() {
    return {
        type: RESET
    };
}
