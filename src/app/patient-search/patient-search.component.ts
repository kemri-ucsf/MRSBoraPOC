import { Component, OnInit, OnDestroy, DoCheck, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PatientSearchService } from './patient-search.service';
// import { PatientResourceService } from './../openmrs-api/patient-resource.service';
import { Patient } from '../models/patient.model';

@Component({
  templateUrl: './patient-search.component.html',
  styleUrls: [ './patient-search.component.css' ]
})


export class PatientSearchComponent  implements OnInit, OnDestroy{	
	public patients: Patient[];
	public isResetButton: boolean = true;
	public totalPatients: number;
	public isLoading: boolean = false;
	public hasConductedSearch = false;
	public page: number = 1;
	public adjustInputMargin: string = '240px';
	public subscription: Subscription;
	public title: string = 'Patient Search';
	public errorMessage: string = '';
	public noMatchingResults: boolean = false;

	/*
	patientSelected emits the patient object
	to other components so they can use
	the selected patient

	The hide Result property is passed down
	from parent to child to hide results of
	patient search

	*/
	@Output() 
	public patientSelected: EventEmitter<any> = new EventEmitter<any>();
	public patientSearchString: string;
	@Input() public hideResults: boolean = false;

	private _searchString: string;
	public get searchString(): string {
	return this._searchString;
	}
	public set searchString(v: string) {
	this._searchString = v;
	this.hasConductedSearch = false;
	}

	constructor(private patientSearchService: PatientSearchService,
	          	private router: Router
	          ) { }

	public ngOnInit() {
		this.totalPatients = 0;
		this.noMatchingResults = true;
	}

	public ngOnDestroy() {}

	public onResultsFound(results) {
	    if (results.length > 0) {      
	      this.patients = results;
	      this.totalPatients = this.patients.length;
	      this.hideResults = false;
	    } else {
	      this.patients = [];
	      this.totalPatients = 0;
	      this.hideResults = true;
	    }
	    // clear the search text
	    this.patientSearchString= ' matching "' + this.searchString + '"';
	    this.hasConductedSearch = true;
	  }

 	public onError(error) {
 		console.log('Error in operation - ' + error);
 	}

 	public loadPatient(): void {
		this.totalPatients = 0;
		if (this.subscription) {
			this.subscription.unsubscribe();
		}

		if (this.searchString && this.searchString.length > 3){
			this.isLoading = true;
			this.patients = [];
			this.errorMessage = '';
			this.subscription = this.patientSearchService.searchPatient(this.searchString, false)
				.subscribe(
					(data) => {
					  this.isLoading = false;
					  this.onResultsFound(data);
					  this.resetInputMargin();
					  if (data.length === 0) {
            				this.noMatchingResults = true;
            		  }
					  // app feature analytics
					  // this.appFeatureAnalytics.trackEvent('Patient Search', 'Patients Searched', 'loadPatient');
			},
			(error) => {
			  this.onError(error);
			}
			);
		}
	}

	public selectPatient(patient) {
	      this.patientSelected.emit(patient);
	      this.hideResults = true;
	      console.log(patient);
	      this.router.navigate(['/mrsbora/reception/new']);
	 }

	public resetInputMargin() {}

}

