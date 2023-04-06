import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  q:Question;

  
  @Input()
  mode:string;
  constructor() { }

  ngOnInit(): void {
  }

  isnotanswered()
  {
    let res=this.q.options.every(o => o.isSelected==false);
    return res;
  }

  isCorrect()
  {
     return this.q.options.every(o=> o.isAnswer==o.isSelected);

  }
  correctoption()
  {
   let res= this.q.options.filter(x => x.isAnswer==true);
    return res.pop().name;
  }
}
