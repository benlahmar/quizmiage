import { Option } from "./option";

export class Question
{
    id:number;
    name:string;
    questionTypeId:number;
    options: Option[];

    constructor(data)
    {
        this.id=data.id;
        this.name=data.name;
        this.questionTypeId=data.questionType;
        this.options=[];
        data.options.forEach(e => {
            this.options.push(new Option(e))
            
        });
    }
}