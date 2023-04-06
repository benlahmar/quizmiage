import { Component, OnInit } from '@angular/core';
import { themedata } from '../data/theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  data=themedata;
  constructor() { }

  ngOnInit(): void {
  }

}
