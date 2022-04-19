import { Component, OnInit,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';//so users can use HttpClient app
import { NgForm } from '@angular/forms';
import { User } from '../user-class/user';
import { GithubService } from '../github-service/github.service';


@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  user: User;
  username: string;//from github username input
  githubService:GithubService;
  public showInput = true;
  public showData = false;

  submitUsername() {
		this.githubService.getUserData(this.username);
    this.showInput = false;
    this.showData = true;
	}

  showUserInput(hideInput) {
    this.showInput = hideInput;
    this.showData = false;
  }

 
	constructor(githubService:GithubService) { 
		this.githubService = githubService;
	}

  ngOnInit(){
  }

}
