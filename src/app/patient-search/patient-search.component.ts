import { Component, OnInit, OnDestroy, DoCheck, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PatientSearchService } from './patient-search.service';
import { Patient } from '../models/patient.model';
import { Subscription } from 'rxjs';
// import { AppFeatureAnalytics } from '../shared/app-analytics/app-feature-analytics.service';

@Component({
  // selector: 'my-app',
  templateUrl: './patient-search.component.html',
  styleUrls: [ './patient-search.component.css' ]
})


export class PatientSearchComponent {
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

	/*
	patientSelected emits the patient object
	to other components so they can use
	the selected patient

	The hide Result property is passed down
	from parent to child to hide results of
	patient search

	*/
	@Output() public patientSelected: EventEmitter<any> = new EventEmitter<any>();
	@Input() public hideResults: boolean = false;

	private _searchString: string;
	public get searchString(): string {
	return this._searchString;
	}
	public set searchString(v: string) {
	this._searchString = v;
	this.hasConductedSearch = false;
	}

	constructor(//private patientSearchService: PatientSearchService,
	          private route: ActivatedRoute,
	          // private appFeatureAnalytics: AppFeatureAnalytics,
	          private router: Router) {
	}

	public ngOnInit() {

	}

	public ngOnDestroy() {

	}

	public onResultsFound() {

	}

	public onError() {
	}

	public loadPatient(): void {

	}

	public updatePatientCount() {
	}

	public selectPatient() {
	}

	public resetSearchList() {
	}

	public tooltipStateChanged(state: boolean): void {
	}

	public resetInputMargin() {
	}
	
}
