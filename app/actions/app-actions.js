
export const SET_QUIZ_STATUS = 'app@setQuizStatus';
export const SET_THANKYOU_STATUS = 'app@setThankyourStatus';

export function setQuizStatus(value) {
    return {
        type: SET_QUIZ_STATUS,
        value
    };
}

export function setThankyourStatus(value) {
    return {
        type: SET_THANKYOU_STATUS,
        value
    };
}
