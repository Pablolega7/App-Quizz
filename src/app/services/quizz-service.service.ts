import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//NGRX//
import { Store } from '@ngrx/store';
import { MainState } from '../main.reducer';
//RXJS//
import { Observable } from 'rxjs';
//MODELOS//
import { ServerResponse } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzServiceService {

  constructor( private store: Store<MainState>, private http: HttpClient ) { }

  getQuestions(): Observable<ServerResponse>{
    return this.http.get<ServerResponse>( 'https://aq6009.gways.org/prueba-front/get' )
  };
};
