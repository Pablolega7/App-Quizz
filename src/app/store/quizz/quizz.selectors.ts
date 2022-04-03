

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { QuizzState } from './quizz.state';


export const selectQuizzState = createFeatureSelector<QuizzState>('quizz');

export const selectQuestions = createSelector(
    selectQuizzState,
  (state: QuizzState ) => state.questions
);
export const selectQuestionsLoading = createSelector(
    selectQuizzState,
  (state: QuizzState ) => state.loading
);
export const selectResult = createSelector(
    selectQuizzState,
  (state: QuizzState ) => state.result  
);
export const selectStart = createSelector(
    selectQuizzState,
  (state: QuizzState ) => state.start
);

