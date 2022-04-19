import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GithubService } from '../github-service/github.service';
import { NgForm } from '@angular/forms';
import { User } from '../user-class/user';

@Component({
  selector: 'app-github-results',
  templateUrl: './github-results.component.html',
  styleUrls: ['./github-results.component.css']
})
export class GithubResultsComponent implements OnInit {

  user:User;
  repoDetails = [];
  githubService: GithubService;
  hideInput:boolean

  constructor(githubService:GithubService) {
    this.githubService =githubService;
  }

  @Output() toggleBack = new EventEmitter();

  goBack(){
    this.hideInput = true;
    this.toggleBack.emit(this.hideInput);
  }



  ngOnInit(){
    this.user = this.githubService.user;
    this.repoDetails = this.githubService.repoData
  }

}
