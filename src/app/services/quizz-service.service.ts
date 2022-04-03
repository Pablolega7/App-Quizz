import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { MainState } from '../main.reducer';

import { ServerResponse } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzServiceService {

  constructor( private store: Store<MainState>, private http: HttpClient ) { }

  getQuestions(): Observable<ServerResponse>{
    return this.http.get<ServerResponse>('https://aq6009.gways.org/prueba-front/get')
  }
  

};
