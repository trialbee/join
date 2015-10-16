
export const SET_QUIZ_STATUS = 'app@setQuizStatus';

export function setQuizStatus(value) {
    return {
        type: SET_QUIZ_STATUS,
        value
    };
}