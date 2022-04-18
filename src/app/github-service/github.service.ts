import { Injectable } from '@angular/core';


@Injectable({ // tell Angular that this class is a service
  providedIn: 'root' //means that this service is injectable throughout the application
})
export class GithubService {

  constructor() { }
}
