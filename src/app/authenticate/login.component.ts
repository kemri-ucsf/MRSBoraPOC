import { Component, Output, EventEmitter, Input, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { AuthenticationService } from '../openmrs-api/authentication.service';
import { Messages } from '../utils/messages';
import { Subscription } from 'rxjs';

@Component({
  // selector: 'my-app',
  templateUrl: 'app/authenticate/login.component.html',
  styleUrls: [ 'app/authenticate/login.component.css' ]
})

export class LoginComponent  implements OnInit {
	@Output() public loginSuccess = new EventEmitter();
  	@Output() public loginFailure = new EventEmitter();

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
		//event.stopPropagation();
    	//event.preventDefault();
    	let currentRoute = window.location.toString();
    	console.log('currentRoute: ' + currentRoute);
    	console.log('username: ' + username + '  password: ' + password);

		username = this.username;
		password = this.password;
		this.subscription = this.authenticationService.authenticate(username, password)
	      .subscribe(
	     (response: Response) => {
	       let data = response.json();

	       if (data.authenticated) {
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
