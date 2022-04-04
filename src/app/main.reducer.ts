
import { ActionReducerMap } from '@ngrx/store';
import { QuizzState } from './store/quizz/quizz.state';
import { QuizzStateReducer } from './store/quizz/quizz.reducer';

export interface MainState {
  quizz: QuizzState;
};


export const MAIN_REDUCER: ActionReducerMap<MainState> = {
  quizz: QuizzStateReducer
};