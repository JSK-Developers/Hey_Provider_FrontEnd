import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
    selector: 'app-WashingMachineService-model',
    templateUrl: './WashingMachineService.component.html',
    styleUrls: ['./WashingMachineService.component.scss']
})
export class WashingMachineServiceComponent {

    constructor(private modalService: BsModalService) { }

}
