import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { CustomerServiceModelComponent } from './customer-service-models/customer-services-model.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-services',
  templateUrl: './customer-services.component.html',
  styleUrls: ['./customer-services.component.scss']
})
export class CustomerServicesComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService, public router: Router) { }
  ngOnInit() {
  }

  openModalWithComponent() {
    //   this.router.navigate(['services']);

    this.bsModalRef = this.modalService.show(CustomerServiceModelComponent, Object.assign({}, { class: 'gray modal-lg' }));
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  close(): void {
    this.bsModalRef.hide();
  }

}
