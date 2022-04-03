import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from '../main.reducer';
import { getquestions } from '../store/quizz/quizz.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

 

}
