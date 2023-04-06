import { Question } from "./question";
import { QuizConfig } from "./quizconfig";

export class Quiz
{

    id:number;
    name:string;
    description:string;
    questions: Question[];
    config:QuizConfig;


    constructor(data)
    {
        this.id=data.id;
        this.name=data.name;
        this.description=data.description;
        this.questions=[];
        data.questions.forEach(q => {
            this.questions.push(new Question(q))
        });
        this.config=data.config;
    }
}