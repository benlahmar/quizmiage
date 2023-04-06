import { Component, OnInit } from '@angular/core';
import { quiz1 } from '../data/quiz1';
import { Question } from '../models/question';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  data=quiz1;
  data2:Quiz;
  page=0;
  mode="quiz";

  constructor() {

    this.data2=new Quiz(this.data);

    
   }

  ngOnInit(): void {
  }

next()
{
  this.page++;
}

prev()
{
  this.page--;
}


chagemode(p)
{
  this.mode=p;
}

select(o)
{
  console.log(o);
}

isquestionselected(q:Question)
{
  let r=q.options.every(x => !x.isSelected)
  console.log(r);
  return r;
}
}


