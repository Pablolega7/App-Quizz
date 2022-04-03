
import { ActionReducerMap } from '@ngrx/store';
import { UserState } from './store/user/user.state';
import { UserStateReducer } from './store/user/user.reducer';
import { QuizzState } from './store/quizz/quizz.state';
import { QuizzStateReducer } from './store/quizz/quizz.reducer';

export interface MainState {
  userState: UserState;
  quizz: QuizzState;
};


export const MAIN_REDUCER: ActionReducerMap<MainState> = {
  userState: UserStateReducer,
  quizz: QuizzStateReducer
};