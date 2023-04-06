import { Component, Input, OnInit } from '@angular/core';
import { CalcService } from '../services/calc.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  res:number;
  lg:string;

  txt:string;
  data:any
  constructor(private cal:CalcService) { }

  ngOnInit(): void {
    
    
  }
  chnager()
  {
    console.log("****"+this.lg);
    if(this.lg=='en')
    {
      this.txt="Sign in to start your session";
    }else
    if(this.lg=='fr')
    {
      this.txt="se connecter...."
    }
  }

}
