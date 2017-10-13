import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Ng2PaginationModule } from 'ng2-pagination';
import { PatientSearchComponent } from './patient-search.component';
import { PatientSearchService } from './patient-search.service';;

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        Ng2PaginationModule
    ],
    exports: [ PatientSearchComponent],
    declarations: [PatientSearchComponent],
    // providers: [PatientSearchService, AppFeatureAnalytics],
    providers: [PatientSearchService],
})
export class PatientSearchModule { }