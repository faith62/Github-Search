import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubResultsComponent } from './github-results/github-results.component';
import { GithubService } from './github-service/github.service';
import { DaysAgoPipe } from './pipes/days-ago.pipe';
import { DaysCountPipe } from './pipes/days-count.pipe';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubFormComponent,
    NavbarComponent,
    GithubResultsComponent,
    DaysAgoPipe,
    DaysCountPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  //application can now work with any number of forms that we create thanks to the FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
