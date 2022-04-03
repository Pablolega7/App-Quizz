import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/main.reducer';
import { Credentials } from 'src/app/models/credentials.model';
import { register } from 'src/app/store/user/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public email   :string  = '';
  public password: string = '';
  

  constructor( private store: Store<MainState>) { }

  ngOnInit(): void {
  }

  register( email: string, password: string ){

    this.store.dispatch(register( { credentials: new Credentials( email, password )}))
  };

}
