import { Component, Output, EventEmitter, Input, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { AuthenticationService } from '../openmrs-api/authentication.service';
import { Messages } from '../utils/messages';
import { Subscription } from 'rxjs';

@Component({
  // selector: 'my-app',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LoginComponent  implements OnInit {
	public username: string;
	public password: string;
	public error: string;
	public shouldRedirect: boolean = false;
	public subscription: Subscription;
	
	constructor(private router: Router,
              	private authenticationService: AuthenticationService){		
	}

    public ngOnInit() {}

	public login(username: string, password: string) {
    	let currentRoute = window.location.toString();
	    let userRoles: Array<string> = [];

		this.subscription = this.authenticationService.authenticate(username, password)
	      .subscribe(
	     (response: Response) => {
	       let data = response.json();
	       let roles = data.user.roles;
	       for (let role of roles) {
	       		userRoles.push(role.display);
	       }

	       if (data.authenticated) {
	       	 this.authenticationService.setUserRoles(userRoles);
	         this.router.navigate(['/mrsbora']);
	       }
	       else {
	         console.log('User Not authenticated! ');
	       }
	     });
	}

	public logout(){
		this.authenticationService.logOut();
	}
	
}
