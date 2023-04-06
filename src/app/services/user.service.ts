import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

   baseurl:string="https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  getusers()
  {
      return this.http.get(this.baseurl);
  }

  getuserbyid(id:number)
  {
     return  this.http.get(this.baseurl+"/"+id);
  }

  deleteuser(id:number)
  {
    return this.http.delete(this.baseurl+"/"+id);
  }
}
