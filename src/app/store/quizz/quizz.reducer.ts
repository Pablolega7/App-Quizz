


import { createReducer, on } from '@ngrx/store';
import { initialState, QuizzState } from './quizz.state';
import { getquestions, getQuestionsError, getQuestionsSuccess } from './quizz.actions';


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
);