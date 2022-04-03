


import { createAction, props } from '@ngrx/store';
import { ServerResponse } from '../../models/question.model';


export enum Types {

  GET_QUESTIONS         = '[Quizz State] Get Questions',
  GET_QUESTIONS_SUCCESS = '[Quizz State] Get Questions: Success',
  GET_QUESTIONS_ERROR   = '[Quizz State] Get Questions: Error'


};

// Get Questions: 
export const getquestions        = createAction( Types.GET_QUESTIONS );
export const getQuestionsSuccess = createAction( Types.GET_QUESTIONS_SUCCESS, props<{ serverResponse: ServerResponse }>());
export const getQuestionsError   = createAction( Types.GET_QUESTIONS_ERROR, props<{ error: any }>());

