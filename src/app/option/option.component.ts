import { Component, Input, OnInit } from '@angular/core';
import { Option } from '../models/option';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input()
  r:Option;

  @Input()
  mode:string;
  constructor() { }

  ngOnInit(): void {
  }

}
