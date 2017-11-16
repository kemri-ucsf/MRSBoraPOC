import { Component, Output, EventEmitter, Input, ViewChildren, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../openmrs-api/user.service';
import { User } from '../../models/user.model';
import { SessionStorageService } from '../utils/session-storage.service';
import { Constants } from '../utils/constants';

@Component({
  // selector: 'my-app',
  templateUrl: './home.component.html',
  //styleUrls: [ 'app/home/home.component.css' ]
})

export class HomeComponent implements OnInit {
	@Output() 
	public userRoles: String;
	public userName: String;
	public loginTime: String;
	public user: User;

	constructor(private router: Router,
        private sessionStorageService: SessionStorageService,
        private userService: UserService) {
			// this.user = this.userService.getLoggedInUser();
		}

	ngOnInit() {
		this.userRoles = this.sessionStorageService.getItem('userroles');
		let user = this.sessionStorageService.getObject('user');
		this.userName = user.display;
		this.router.navigate(['/mrsbora/home']); 
	}
}
