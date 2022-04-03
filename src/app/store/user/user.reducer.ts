

// import { createReducer, on } from '@ngrx/store';
// import { initialState, UserState } from './user.state';
// import { login, loginError, logout, getUserData, getUserDataSuccess, getUserDataError, register, registerSuccess, registerError, setUserData, setUserDataSuccess, setUserDataError } from './user.actions';


// export const UserStateReducer = createReducer(
//   initialState,

//   // LOGIN:
//   on(login, (state: UserState, {credentials}) => ({
//    ...state,
//    loading : true
//   })),

//   on(loginError, (state: UserState, {error}) => ({
//    ...state,
//    loading : false,
//    error
//   })),

//   // LOGOUT:
//   on(logout, (state: UserState) => ({
//     ...state,
//     loading : false,
//     user: null
//    })),

//   // GET USER DATA:
//   on(getUserData, (state: UserState, {id} ) => ({
//     ...state,
//     loading : true,
//    })),

//   on(getUserDataSuccess, (state: UserState, {user} ) => ({
//     ...state,
//     loading : false,
//     user
//    })),

//   on(getUserDataError, (state: UserState, {error} ) => ({
//     ...state,
//     loading : false,
//     error
//    })),

//      // SET USER DATA:
//   on(setUserData, (state: UserState, {user} ) => ({
//     ...state,
//     loading : true,
//    })),

//   on(setUserDataSuccess, (state: UserState ) => ({
//     ...state,
//     loading : false
//    })),

//   on(setUserDataError, (state: UserState, {error} ) => ({
//     ...state,
//     loading : false,
//     error
//    })),

//    // REGISTER:
//    on(register, (state: UserState, {credentials}) => ({
//     ...state,
//     loading : true
//    })),

//    on(registerSuccess, (state: UserState) => ({
//     ...state,
//     loading : false
//    })),

//    on(registerError, (state: UserState, {error}) => ({
//     ...state,
//     loading : false,
//     error
//    })),

// );
