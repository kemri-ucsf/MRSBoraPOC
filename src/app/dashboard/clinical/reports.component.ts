import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  // selector: 'my-app',
  templateUrl: './reports.component.html',
  styleUrls: [ './reports.component.css' ]
})


export class ClinicalReportsComponent implements OnInit {
	constructor (private router: Router) {}

	ngOnInit() {  
		//this.router.navigate(['/mrsbora/home']); 
	}
}
