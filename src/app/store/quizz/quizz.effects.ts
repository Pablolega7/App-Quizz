


// ANGULAR:
import { Injectable } from '@angular/core';

// RXJS:
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

// NgRx:
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { QuizzServiceService } from 'src/app/services/quizz-service.service';
import { getquestions, getQuestionsSuccess, getQuestionsError } from './quizz.actions';


@Injectable()

export class QuizzEffects {

  constructor(
    private actions$: Actions,
    private quizzService: QuizzServiceService,

  ) {}

  getQuestions$ = createEffect(() =>
  this.actions$.pipe(
    ofType( getquestions ),
    switchMap( () => this.quizzService.getQuestions().pipe(
      map( (serverResponse) => getQuestionsSuccess({ serverResponse  })),
      catchError(error => of(getQuestionsError({ error }))),
    ),
    ),
  ),
 );
};