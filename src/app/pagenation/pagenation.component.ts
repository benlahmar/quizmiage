import { Component, EventEmitter, Input, OnInit, Output, Sanitizer } from '@angular/core';

@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.css']
})
export class PagenationComponent implements OnInit {

 
  p:number=0;

  @Output()
  handler:EventEmitter<any>=new EventEmitter();
  @Input()
  back:boolean;
  @Input()
  size:number;
  item:Number[]=[]
  constructor() { 
    
  }

  ngOnInit(): void {
    for(let i=0;i<this.size;i++)
    this.item.push(i);
  }

  next()
  {
    this.p++;
    console.log("p:    "+this.p)
    this.handler.emit({'p':this.p});
  }
  
  prev()
  {
    this.p--;
    this.handler.emit({'p':this.p});
  }

  goto(pg:number)
  {
    this.p=pg;
    this.handler.emit({'p':this.p});
  }
}
