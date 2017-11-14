"use strict";
var program_enrollment_model_1 = require("./program-enrollment.model");
var common_1 = require("@angular/common");
var title_case_pipe_1 = require("../shared/pipes/title-case.pipe");
describe('Model: ProgramEnrollment', function () {
    var existingProgramEnrollment = {
        uuid: 'uuid',
        display: 'THe program Enrollment',
        program: {
            uuid: 'program uuid'
        },
        dateEnrolled: '2016-01-01 0:00z',
        dateCompleted: '2016-01-01 0:00z'
    };
    var datePipe = new common_1.DatePipe('en-US');
    var titleCasePipe = new title_case_pipe_1.TitleCasePipe();
    var dateFormat = 'MMM dd, yyyy';
    it('should wrap openmrs programEnrollment for display correctly', function () {
        var wrappedProgramEnrollment = new program_enrollment_model_1.ProgramEnrollment(existingProgramEnrollment);
        expect(wrappedProgramEnrollment.uuid).toEqual(existingProgramEnrollment.uuid);
        expect(wrappedProgramEnrollment.display).toEqual(titleCasePipe.transform(existingProgramEnrollment.display));
        expect(wrappedProgramEnrollment.program.uuid).toEqual(existingProgramEnrollment.program.uuid);
        expect(wrappedProgramEnrollment.dateEnrolled)
            .toEqual(datePipe.transform(existingProgramEnrollment.dateEnrolled, dateFormat));
        expect(wrappedProgramEnrollment.dateCompleted)
            .toEqual(datePipe.transform(existingProgramEnrollment.dateCompleted, dateFormat));
        // datePipe.transform(existingProgramEnrollment.dateCompleted, dateFormat)
        // TODO implement these tests
        /*it('should generate update existing payload correctly',()=>{
    
         });
    
         it('should generate a new Program new payload correctly', ()=>{
    
    
         });
    
         it('should generate an existing Program payload correctly', ()=>{
    
         });*/
    });
});
//# sourceMappingURL=program-enrollment.model.spec.js.map