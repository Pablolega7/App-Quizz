import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Credentials } from 'src/app/models/credentials.model';
import { login } from 'src/app/store/user/user.actions';
import { UserState } from 'src/app/store/user/user.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email   : string    = '';
  public password: string    = '';

  constructor( private store: Store<UserState> ) { }

  ngOnInit(): void {
  }

  login(){
    this.store.dispatch(login( { credentials: new Credentials( this.email, this.password )}));
  };
};
