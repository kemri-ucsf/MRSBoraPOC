import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  // selector: 'my-app',
  templateUrl: './lab-results.component.html',
  styleUrls: [ './lab-results.component.css' ]
})


export class ClinicalLabResultsComponent implements OnInit {
	constructor (private router: Router) {}

	ngOnInit() {  
		//this.router.navigate(['/mrsbora/home']); 
	}
}
