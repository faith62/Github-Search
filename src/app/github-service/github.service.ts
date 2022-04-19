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
  repository:Repository;
  repoData=[];
  newUserData: any = [];
  showInput:boolean;
  showData:boolean;

  constructor(private http: HttpClient) { 
    this.user = new User("",0,"","",new Date(),new Date(),"");
  		this.repository = new Repository("","","",new Date(),"","","",new Date()); 	

  }
  getUserData(username: string){
    this.repoData.length = 0;

    interface ApiResponse{
      bio:string,
      public_repos:number,
      login:string,
      avatar_url:string,
      created_at:Date, 
      updated_at:Date,
      name:string,
      full_name:string, 
      html_url:string   
    }

    let promise =new Promise<void>((resolve,reject)=>{
      // We then use the getmethod and pass to the API URL. we then call the subscribe function that takes in the response function that is called when the API request is successful and returns a response.
        this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
            // Mapping The Response we get to Every Property that we'll Eventually Use to Display in our git-search-results.component.html
            this.user.bio=response.bio;
            this.user.avatar_url=response.avatar_url;
            this.user.login=response.login;
            this.user.public_repos=response.public_repos;
            this.user.created_at=response.created_at;
            this.user.updated_at=response.updated_at;
            this.user.html_url=response.html_url;

            resolve()
        },
        error=>{
                reject(error)
            }
        )

        
        this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{
            for(var i=0; i<response.length; i++)
          {
            this.newUserData = new Repository(response[i].name,response[i].full_name,response[i].description,response[i].updated_at,response[i].html_url,response[i].clone_url,response[i].language,response[i].created_at);
            this.repoData.push(this.newUserData);
          }

            resolve()

        },
        error=>{

                reject(error)
            }
        )
    })

    return promise

  }
}
