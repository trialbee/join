
import {
    SET_QUIZ_STATUS,
    SET_THANKYOU_STATUS
} from 'actions/app-actions';

export const initialState = {
    isPlaying: false,
    isThanking: false
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_QUIZ_STATUS:
            return { ...state,
                isPlaying: action.value
            };
        case SET_THANKYOU_STATUS:
            return { ...state,
                isThanking: action.value
            };
        default:
            return state;
    }
}
