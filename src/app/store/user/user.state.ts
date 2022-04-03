


import { UserModel } from '../../models/user.model';

export interface UserState {
  user     : UserModel | null,
  error    : any
  loading  : boolean,
};

export const initialState: UserState = {
  user     : null,
  error    : null,
  loading  : false,
};
