import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  Subscription } from 'rxjs';
import { MainState } from '../main.reducer';
import { selectQuestions, selectQuestionsLoading } from '../store/quizz/quizz.selectors';
import { Question } from '../models/question.model';
import { addResult, getquestions, setStartTime, resetQuizz } from '../store/quizz/quizz.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit, OnDestroy {

quizz$ = this.store.select( selectQuestions );
quizzSubs: Subscription;
questions: Question[];

check: boolean = false;

actualQuestion: number = 0;

loading$ = this.store.select( selectQuestionsLoading );

  constructor( private store: Store<MainState>, private router: Router) { }
  

  ngOnInit(): void {
    this.store.dispatch( getquestions() );
    this.quizzSubs = this.quizz$.subscribe( questions =>  this.questions = questions);
    this.store.dispatch( setStartTime({ startTime: new Date() }) ); 
  };

  nextQuestion() {
   if (this.actualQuestion < this.questions.length - 1) this.actualQuestion++;
   else  this.router.navigate(['/result']);
  };

  resp(score: number) {
    if(this.check) return;
    this.check = true;
    setTimeout(() => {
      this.store.dispatch( addResult({ result: score }) );
      this.nextQuestion();
      this.check = false;
    }, 300);
  }

  resetQuizz(){ 
    this.store.dispatch( resetQuizz() ) 
  }


  ngOnDestroy(): void {
    this.quizzSubs?.unsubscribe();
  };
};
