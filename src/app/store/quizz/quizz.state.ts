

import { Question } from 'src/app/models/question.model';


export interface QuizzState {
  questions: Question[],
  error    : any
  loading  : boolean,
  result   : number,
  start    : Date | null
};

export const initialState: QuizzState = {
  questions : [],
  error     : null,
  loading   : false,
  result    : 0,
  start     : null
};
