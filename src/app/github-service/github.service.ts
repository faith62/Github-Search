import { Injectable } from '@angular/core';
import { User } from '../user-class/user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../repository-class/repository';




@Injectable({ // tell Angular that this class is a service
  providedIn: 'root' //means that this service is injectable throughout the application
})
export class GithubService {

  user:User;
  reporitory:Repository;
  repoData=[];
  newUserData: any = [];
  showInput:boolean;
  showData:boolean;

  constructor(private http: HttpClient) { 
    this.user = new User("",0,"","",new Date(),new Date(),"");
  		this.repository = new Repository("","","",new Date(),"","","",new Date()); 	

  }
}