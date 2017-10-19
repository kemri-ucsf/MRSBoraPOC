import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

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
