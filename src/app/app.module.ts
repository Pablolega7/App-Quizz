//ANGULAR//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//NGRX//
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MAIN_REDUCER } from './main.reducer';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { QuizzEffects } from './store/quizz/quizz.effects';
//COMPONENTES//
import { AppComponent } from './app.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultComponent } from './result/result.component';
//MODULO RUTAS//
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizzComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(MAIN_REDUCER),
    EffectsModule.forRoot([ QuizzEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 100, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
