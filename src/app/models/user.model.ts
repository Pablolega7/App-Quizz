

export interface UserModel {

    email     : string,
    id        : string,
    name      : string,
    surname   : string,
    regDate   : string,
    birthDate : string
  };
  
  export class User implements UserModel {
  
    constructor( public email: string, public id: string, public name: string, public surname: string, public regDate: string, public birthDate: string  ){}
  };
  