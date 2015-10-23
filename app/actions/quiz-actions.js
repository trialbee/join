
export const SET_CURRENT_QUESTION = 'quiz@setCurrentQuestion';
export const ADD_ANSWER = 'quiz@addAnswer';
export const START = 'quiz@start';
export const RESET = 'quiz@reset';
export const SET_CAN_ANSWER = 'quiz@setCanAnswer';

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

export function start() {
    return {
        type: START
    };
}

export function reset() {
    return {
        type: RESET
    };
}

export function setCanAnswer(value) {
    return {
        type: SET_CAN_ANSWER,
        value: !!value
    };
}

