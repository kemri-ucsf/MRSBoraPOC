import { Component, Output, EventEmitter, Input, ViewChildren, OnInit, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../openmrs-api/user.service';
import { User } from '../models/user.model';
import { SessionStorageService } from '../utils/session-storage.service';
import { AuthenticationService } from '../openmrs-api/authentication.service';
import { Constants } from '../utils/constants';

@Component({
  // selector: 'my-app',
  templateUrl: './home.component.html',
  //styleUrls: [ 'app/home/home.component.css' ]
})

export class HomeComponent implements OnInit {
	@Output() 
	public isReception: boolean = false;
	public isSsd: boolean = false;
	public isClinical: boolean = false;
	public isLab: boolean = false;
	public isPharmacy: boolean = false;
	public isSuperUser: boolean = false;
	public userRolesArray: String[];
	public userName: string;
	public todayDate: string;
	public user: User;

	constructor(private router: Router,
        private sessionStorageService: SessionStorageService,
        private userService: UserService,
        private authenticationService: AuthenticationService) {
			// this.user = this.userService.getLoggedInUser();
		}

	ngOnInit() {
		let userRoles = this.sessionStorageService.getItem('userroles');
		this.userRolesArray = userRoles.split(",");
		let user = this.sessionStorageService.getObject('user');
		this.userName = user.display;
		this.todayDate = new Date().toLocaleDateString('en-GB');

		// evaluate roles
		if (this.userRolesArray.indexOf("Reception") > -1 ) {
		    this.isReception=true;
		}
		if (this.userRolesArray.indexOf("SSD") > -1 ) {
		    this.isSsd=true;
		}
		if (this.userRolesArray.indexOf("Clinical") > -1 ||
			this.userRolesArray.indexOf("Clinical Officer") > -1 ||
			this.userRolesArray.indexOf("Nurse") > -1 ||
			this.userRolesArray.indexOf("Provider") > -1 ) {
		    this.isClinical=true;
		}
		if (this.userRolesArray.indexOf("Lab") > -1 ) {
		    this.isLab=true;
		}
		if (this.userRolesArray.indexOf("Pharmacy") > -1 ) {
		    this.isPharmacy=true;
		}
		if (this.userRolesArray.indexOf("SuperUser") > -1 ||
			this.userRolesArray.indexOf("System Developer") > -1 ) {
		    this.isSuperUser=true;
		}

		this.router.navigate(['/mrsbora/home']); 
	}

	public logout(){
		this.authenticationService.logOut();
		this.router.navigate(['/login']);
	}
}
