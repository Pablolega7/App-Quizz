import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  Subscription } from 'rxjs';
import { MainState } from '../main.reducer';
import { selectQuestions, selectQuestionsLoading } from '../store/quizz/quizz.selectors';
import { Question } from '../models/question.model';
import { getquestions } from '../store/quizz/quizz.actions';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit, OnDestroy {

quizz$ = this.store.select( selectQuestions );
quizzSubs: Subscription;
questions: Question[];

actualQuestion: number = 0;

loading$ = this.store.select( selectQuestionsLoading );

  constructor( private store: Store<MainState> ) { }
  

  ngOnInit(): void {
    this.store.dispatch( getquestions() );
    this.quizzSubs = this.quizz$.subscribe( questions =>  this.questions = questions);

  };

  nextQuestion() {
    (this.actualQuestion < this.questions.length - 1) && this.actualQuestion++
  };

  ngOnDestroy(): void {
    this.quizzSubs?.unsubscribe();
  };
};
