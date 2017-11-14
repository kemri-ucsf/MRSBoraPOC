import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  // selector: 'my-app',
  templateUrl: './clinical-dashboard.component.html',
  styleUrls: [ './clinical-dashboard.component.css' ]
})


export class ClinicalDashboardComponent implements OnInit {
	constructor (private router: Router) {}

	ngOnInit() {  
		this.router.navigate(['/mrsbora/clinical/queue']); 
	}
}
