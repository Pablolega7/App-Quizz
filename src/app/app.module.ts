//ANGULAR//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//FIREBASE//
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
//NGRX//
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MAIN_REDUCER } from './main.reducer';
import { HomeComponent } from './home/home.component';
import { UserEffects } from './store/user/user.effects';
//COMPONENTES//
import { AppComponent } from './app.component';
//MODULO RUTAS//
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { QuizzEffects } from './store/quizz/quizz.effects';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultComponent } from './result/result.component';

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
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot(MAIN_REDUCER),
    EffectsModule.forRoot([UserEffects, QuizzEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 100, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
