import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  // selector: 'my-app',
  templateUrl: './queue.component.html',
  styleUrls: [ './queue.component.css' ]
})


export class ClinicalQueueComponent implements OnInit {
	constructor (private router: Router) {}

	ngOnInit() {  
		//this.router.navigate(['/mrsbora/home']); 
	}
}
