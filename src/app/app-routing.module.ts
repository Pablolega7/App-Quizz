import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path        : 'home',
    component   : HomeComponent,
  },
  {
    path        : 'auth',
   loadChildren : () => import( './auth/auth.module' ).then( m => m.AuthModule )
  },
  {
    path        : 'quizz',
    component   : QuizzComponent,
  },
  {
    path        : 'result',
    component   : ResultComponent,
  },
  {
    path        : '**',
    redirectTo  : 'home',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
