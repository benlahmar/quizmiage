import { Component, Input, OnInit } from '@angular/core';
import { QuizConfig } from '../models/quizconfig';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  @Input()
  conf:QuizConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
