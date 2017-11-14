import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  // selector: 'my-app',
  templateUrl: './emergency.component.html',
  styleUrls: [ './emergency.component.css' ]
})


export class ClinicalEmergencyComponent implements OnInit {
	constructor (private router: Router) {}

	ngOnInit() {  
		//this.router.navigate(['/mrsbora/home']); 
	}
}
