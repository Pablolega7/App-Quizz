import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { doc, DocumentData, Firestore, getFirestore, setDoc } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { MainState } from '../main.reducer';
import { CredentialsModel } from '../models/credentials.model';
import { UserModel } from '../models/user.model';
import { getUserData } from '../store/user/user.actions';
import { ServerResponse } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzServiceService {

  constructor( private auth: Auth, public db: Firestore, private store: Store<MainState>, private http: HttpClient ) { }

  logout(){
    return this.auth.signOut();
  };

   setUser(user:UserModel){
    const newUser = doc(getFirestore(), 'users', user.id);
    return setDoc(newUser,  {...user}, { merge: true } );
  };

   register({ email, password }: CredentialsModel){
    return createUserWithEmailAndPassword (this.auth ,email, password)
  };

   login( email: string, password: string ){
    return  signInWithEmailAndPassword(this.auth, email, password)
  };

  statusSession(){
    const auth = getAuth();
  onAuthStateChanged(auth, ( user ) => {
    if ( user )  this.store.dispatch( getUserData({ id: user.uid }) )
     else {
      console.log( 'NO HAY USUARIO' );
    }
  });
  };

  async getUserData( id: string ): Promise<DocumentData> {
    const docSnap = await getDoc(doc(getFirestore(), "users", id));
    return docSnap.exists() ? docSnap.data() : null;
  };

  getQuestions(): Observable<ServerResponse>{
    return this.http.get<ServerResponse>('https://aq6009.gways.org/prueba-front/get')
  }
  

};
