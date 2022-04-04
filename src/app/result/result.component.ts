//ANGULAR//
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
//NGRX//
import { Store } from '@ngrx/store';
import { MainState } from '../main.reducer';
import { resetQuizz } from '../store/quizz/quizz.actions';
import { selectResult, selectStart } from '../store/quizz/quizz.selectors';
//RXJS//
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

  constructor( private store: Store<MainState>, private router: Router ) { }
  
  result$ = this.store.select( selectResult );
  start$  = this.store.select( selectStart );
  startSubs : Subscription;

  finishTime: string;
  endTime   : Date;

  ngOnInit(): void {
    this.endTime   = new Date();
    this.startSubs = this.start$.subscribe( start => {
       if(!start) this.router.navigate( ['/home'] );
       else this.finishTime = this.getTimeDifference( start, this.endTime );
    });
  };

   getTimeDifference(startTime: Date, endTime: Date) {
     let diff = endTime.getTime() - startTime.getTime();
     let seconds = Math.floor(diff / 1000);
     let minutes = Math.floor(seconds / 60);
     let secondsLeft = seconds % 60;
     return `${minutes < 10 ? '0'+ minutes: minutes} : ${secondsLeft < 10 ? '0'+ secondsLeft: secondsLeft}`;
  };

  resetQuizz(){
    this.store.dispatch( resetQuizz() );
  };

  ngOnDestroy(): void {
    this.startSubs?.unsubscribe();
  };

};
