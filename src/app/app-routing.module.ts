import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { User } from './user-class/user';
import { Repository } from './repository-class/repository';


const routes: Routes = [
  // defined the path and component for each route
  {path: 'github', component:GithubComponent},
  {path: 'user', component:User},
  {path: 'repos', component:Repository},

  { path: '', redirectTo:"/github", pathMatch:"full"},
  // {path: '**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
