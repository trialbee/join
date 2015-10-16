
import {
    SET_CURRENT_QUESTION,
    ADD_ANSWER,
    RESET
} from 'actions/quiz-actions';

import { frontend } from 'assets/quiz.js';

export const initialState = {
    currentQuestion: 0,
    questions: frontend,
    answers: {}
}

export function quizReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_QUESTION:
            return { ...state,
                currentQuestion: action.questionIndex
            };
        case ADD_ANSWER:
            var answers = { ...state.answers };
            answers[action.questionId] = action.answer;
            return { ...state,
                answers: answers
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
