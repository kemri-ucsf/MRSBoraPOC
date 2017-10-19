import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'my-app',
  templateUrl: 'app/home/home.component.html',
  //styleUrls: [ 'app/home/home.component.css' ]
})

export class HomeComponent implements OnInit {
	constructor (private router: Router) {}

	ngOnInit() {  
		this.router.navigate(['/mrsbora/dashboard']); 
	}
}
