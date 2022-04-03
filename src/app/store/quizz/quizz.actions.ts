


import { createAction, props } from '@ngrx/store';
import { ServerResponse } from '../../models/question.model';


export enum Types {

  GET_QUESTIONS         = '[Quizz State] Get Questions',
  GET_QUESTIONS_SUCCESS = '[Quizz State] Get Questions: Success',
  GET_QUESTIONS_ERROR   = '[Quizz State] Get Questions: Error',

  SET_START_TIME        = '[Quizz State] Set Start Time',
  ADD_RESULT            = '[Quizz State] Add Result',
  RESET_QUIZZ           = '[Quizz State] Reset Quizz'
};

// Get Questions: 
export const getquestions        = createAction( Types.GET_QUESTIONS );
export const getQuestionsSuccess = createAction( Types.GET_QUESTIONS_SUCCESS, props<{ serverResponse: ServerResponse }>());
export const getQuestionsError   = createAction( Types.GET_QUESTIONS_ERROR, props<{ error: any }>());

export const setStartTime        = createAction( Types.SET_START_TIME, props<{ startTime: Date }>());
export const addResult           = createAction( Types.ADD_RESULT, props<{ result: number }>());
export const resetQuizz          = createAction( Types.RESET_QUIZZ );

