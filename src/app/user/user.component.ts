import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data;

  constructor(private uservice:UserService) { }

  ngOnInit(): void {
    this.uservice.getusers().subscribe(x=>{
      console.log(x);
      this.data=x;
    })
  }

}
