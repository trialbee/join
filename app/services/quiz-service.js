
import { setQuizStatus } from 'actions/app-actions';

export function start() {
    return (dispatch, getState) => {
        dispatch(setQuizStatus(true));
    };
}

export function stop() {
    return (dispatch, getState) => {
        dispatch(setQuizStatus(false));
    };
}
