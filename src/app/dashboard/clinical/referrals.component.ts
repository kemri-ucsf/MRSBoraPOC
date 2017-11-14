import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  // selector: 'my-app',
  templateUrl: './referrals.component.html',
  styleUrls: [ './referrals.component.css' ]
})


export class ClinicalReferralsComponent implements OnInit {
	constructor (private router: Router) {}

	ngOnInit() {  
		//this.router.navigate(['/mrsbora/home']); 
	}
}
