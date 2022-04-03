

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../user/user.state';


export const selectUserState = createFeatureSelector<UserState>('userState');

export const selectUser = createSelector(
  selectUserState,
  (state: UserState ) => state.user
);

export const selectUserLoading = createSelector(
  selectUserState,
  (state: UserState ) => state.loading
);
