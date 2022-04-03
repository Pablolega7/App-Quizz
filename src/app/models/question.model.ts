export interface ServerResponse {
        success: number,
        data: Question[]
    
}


export interface Question {
    question: string;
    answers:  Answer[];
}

export interface Answer {
    text:  string;
    image: string;
    score: number;
}
