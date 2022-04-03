
// ANGULAR:
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// RXJS:
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { from, of } from 'rxjs';

// NgRx:
import { Store } from '@ngrx/store';
import { MainState } from '../../main.reducer';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { login, loginError, logout, logoutSuccess, logoutError, getUserData, getUserDataSuccess, getUserDataError, register, setUserData, setUserDataError, registerError, setUserDataSuccess } from './user.actions';
import { QuizzServiceService } from 'src/app/services/quizz-service.service';
import { User } from 'src/app/models/user.model';


@Injectable()

export class UserEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<MainState>,
    private quizzService: QuizzServiceService,

  ) {}



  userLogin$ = createEffect(() =>
  this.actions$.pipe(
    ofType( login),
    switchMap( ({ credentials}) => from( this.quizzService.login( credentials.email, credentials.password ) ).pipe(
      take( 1 ),
      map(
        ({ user }) => {
          this.router.navigate( ['/home'] );
          return getUserData({ id: user.uid });
        }),
      catchError(error => of(loginError({ error }))),
    ),
    ),
  ),
 );

 userLogout$ = createEffect(() =>
      this.actions$.pipe(
        ofType( logout ),
        switchMap(() => from( this.quizzService.logout() ).pipe(
          take( 1 ),
          map( () => {
            this.router.navigate( ['/login'] );
            return logoutSuccess()}),
          catchError( error => of(logoutError({ error }))),
        ),
        ),
      ),
    );

 getUserData$ = createEffect(() =>
 this.actions$.pipe(
   ofType( getUserData ),
   switchMap( ({id}) =>  from(this.quizzService.getUserData(id)).pipe(
     take( 1 ),
     map( ({ email, id, name, surname, regDate, birthDate }) => getUserDataSuccess({user: new User(email, id, name, surname, regDate, birthDate)}) ),
     catchError(error => of(getUserDataError({ error }))),
    ),
    ),
   ),
 );

 setUserData$ = createEffect(() =>
 this.actions$.pipe(
   ofType( setUserData ),
   switchMap( ({ user }) => from(this.quizzService.setUser( user )).pipe(
     take( 1 ),
     map( () => setUserDataSuccess() ),
     catchError(error => of( setUserDataError({ error }) )),
      ),
     ),
    ),
 );

   userRegister$ = createEffect(() =>
   this.actions$.pipe(
     ofType( register ),
     switchMap( ({ credentials }) =>  from(this.quizzService.register({ email: credentials.email, password: credentials.password })).pipe(
       take( 1 ),
       map( ({ user }) => setUserData({ user: new User(user.email, user.uid, '', '', '', '')}) ),
       catchError(error => of(registerError({ error })))
        ),
      ),
   ),
  );
};