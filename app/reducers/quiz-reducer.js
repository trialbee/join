
import {
    SET_CURRENT_QUESTION,
    ADD_ANSWER,
    RESET
} from 'actions/quiz-actions';

export const initialState = {
    currentQuestion: 0,
    questions: 3,
    answers: []
}

export function quizReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_QUESTION:
            return { ...state,
                currentQuestion: action.questionIndex
            };
        case ADD_ANSWER:
            return { ...state,
                answers: [...state.answers, action.answer]
            };
        case RESET: {
            return { ...state,
                currentQuestion: 0,
                answers: []
            }
        }
        default:
            return state;
    }
}
