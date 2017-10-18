import { Component, TemplateRef } from '@angular/core';
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { PatientEncountersDialogComponent } from './patient-encounters-dialog.component';

@Component({
  // selector: 'my-app',
  templateUrl: 'app/patient-encounters/patient-encounters.component.html',
  styleUrls: [ 'app/patient-encounters/patient-encounters.component.css' ]
})


export class PatientEncountersComponent {
	// Handle dialog
    public modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

    public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }
	
}
