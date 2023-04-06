import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { quiz1 } from '../data/quiz1';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.css']
})
export class Quiz1Component implements OnInit {

  qz:Quiz;
  data=quiz1;
  page;
  mode:string="quiz";
  date:Date=new Date();

  constructor(private route:ActivatedRoute) {
    this.qz=new Quiz(this.data);
    this.page=0;
    
   }

  ngOnInit(): void {
    setInterval(()=>{this.date=new Date()},1000)

    console.log(this.route);
    this.route.params.subscribe(p=> console.log(p.id))

    this.route.queryParams.subscribe(q=> console.log(q))

  }
  
  recuper(event)
  {
    console.log(event)
    
    this.page=event.p;
  }
  
  chagemode(m:string)
  {
    this.mode=m;
  }

  score()
  {
   let respone= this.qz.questions.filter(x=> x.options.every(o=>o.isAnswer==o.isSelected));
  let sc=100* respone.length/this.qz.questions.length;
  return sc;
  }
}
