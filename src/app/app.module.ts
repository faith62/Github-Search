import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubResultsComponent } from './github-results/github-results.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubFormComponent,
    NavbarComponent,
    GithubResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
