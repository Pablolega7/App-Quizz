
// import { createAction, props } from '@ngrx/store';
// import { CredentialsModel } from '../../models/credentials.model';
// import { UserModel } from '../../models/user.model';


// export enum Types {
//   LOGIN                 =   '[User State] Login',
//   LOGIN_SUCCESS         =   '[User State] Login: Success',
//   LOGIN_ERROR           =   '[User State] Login: Error',

//   LOGOUT                = '[User State] Logout',
//   LOGOUT_SUCCESS        = '[User State] Logout: Success',
//   LOGOUT_ERROR          = '[User State] Logout: Error',

//   REGISTER              = '[User State] Register',
//   REGISTER_SUCCESS      = '[User State] Register: Success',
//   REGISTER_ERROR        = '[User State] Register: Error',

//   GET_USER_DATA         = '[User State] Get User Data',
//   GET_USER_DATA_SUCCESS = '[User State] Get User Data: Success',
//   GET_USER_DATA_ERROR   = '[User State] Get User Data: Error',

//   SET_USER_DATA         = '[User State] Set User Data',
//   SET_USER_DATA_SUCCESS = '[User State] Set User Data: Success',
//   SET_USER_DATA_ERROR   = '[User State] Set User Data: Error',

// };

// // Login:
// export const login              = createAction( Types.LOGIN, props<{ credentials : CredentialsModel }>());
// export const loginSuccess       = createAction( Types.LOGIN_SUCCESS, props<{ user: UserModel }>())
// export const loginError         = createAction( Types.LOGIN_ERROR, props<{ error : any }>())

// // Logout:
// export const logout             = createAction( Types.LOGOUT );
// export const logoutSuccess      = createAction( Types.LOGOUT_SUCCESS );
// export const logoutError        = createAction( Types.LOGOUT_ERROR, props<{ error: any }>())
 
// // Register: 
// export const register           = createAction( Types.REGISTER, props<{ credentials: CredentialsModel }>());
// export const registerSuccess    = createAction( Types.REGISTER_SUCCESS ); 
// export const registerError      = createAction( Types.REGISTER_ERROR, props<{ error: any }>());
 
// // Get User Data: 
// export const getUserData        = createAction( Types.GET_USER_DATA, props<{ id: string }>());
// export const getUserDataSuccess = createAction( Types.GET_USER_DATA_SUCCESS, props<{ user: UserModel }>());
// export const getUserDataError   = createAction( Types.GET_USER_DATA_ERROR, props<{ error : any }>());
 
// // Set User Data: 
// export const setUserData        = createAction( Types.SET_USER_DATA, props<{ user: UserModel }>());
// export const setUserDataSuccess = createAction( Types.SET_USER_DATA_SUCCESS);
// export const setUserDataError   = createAction( Types.SET_USER_DATA_ERROR, props<{ error: any }>());


