
import { SET_QUIZ_STATUS } from 'actions/app-actions';

export const initialState = {
    isPlaying: false
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_QUIZ_STATUS:
            return { ...state,
                isPlaying: action.value
            };
        default:
            return state;
    }
}
