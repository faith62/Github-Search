import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { User } from './user-class/user';
import { Repository } from './repository-class/repository';
import { GithubResultsComponent } from './github-results/github-results.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // defined the path and component for each route
  {path: 'github', component:GithubComponent},
  {path: 'Result', component:GithubResultsComponent},
  {path: 'user', component:User},
  {path: 'repos', component:Repository},

  { path: '', redirectTo:"/github", pathMatch:"full"},
  {path: '**', component:NotFoundComponent} //error caters

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
