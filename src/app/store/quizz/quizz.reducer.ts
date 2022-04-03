


import { createReducer, on } from '@ngrx/store';
import { initialState, QuizzState } from './quizz.state';
import { getquestions, getQuestionsError, getQuestionsSuccess, setStartTime, addResult, resetQuizz } from './quizz.actions';


export const QuizzStateReducer = createReducer(
  initialState,

  
  on(getquestions, (state: QuizzState ) => ({
   ...state,
   loading : true
  })),

  on(getQuestionsSuccess, (state: QuizzState, { serverResponse } ) => ({
    ...state,
    loading : false,
    questions : serverResponse.data
   })),

  
   on(getQuestionsError, (state: QuizzState, { error } ) => ({
    ...state,
    loading : false,
    error
   })),

   on( setStartTime, (state: QuizzState, { startTime } ) => ({
    ...state,
    start: startTime
   })),

   on( addResult, (state: QuizzState, { result } ) => ({
    ...state,
    result: state.result + result
   })),

    on( resetQuizz, (state: QuizzState ) => ({
    ...state,
    result: 0,
    start: null
    }))
);