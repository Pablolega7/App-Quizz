import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//RXJS//
import { Observable } from 'rxjs';
//MODELOS//
import { ServerResponse } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzServiceService {

  constructor( private http: HttpClient ) { }

  getQuestions(): Observable<ServerResponse>{
    return this.http.get<ServerResponse>( 'https://aq6009.gways.org/prueba-front/get' )
  };
};
