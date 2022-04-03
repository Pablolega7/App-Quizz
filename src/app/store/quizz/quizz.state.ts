

import { Question } from 'src/app/models/question.model';


export interface QuizzState {
  questions : Question[],
  error    : any
  loading  : boolean,
};

export const initialState: QuizzState = {
  questions : [],
  error    : null,
  loading  : false,
};
