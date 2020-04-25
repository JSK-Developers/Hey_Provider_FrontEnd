import { Inject, HostListener } from '@angular/core';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { CustomerServiceModelComponent } from '..//customer-services/customer-service-models/customer-services-model.component';
import { Router } from '@angular/router';
import { HttpservicesService } from '../Http_Services_Api/httpservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  bsModalRef: BsModalRef;
  // isUserLoggidIn: boolean = false
  valid: boolean = true;
  // isUserLoggedIn: boolean = false;
  constructor(private modalService: BsModalService, public router: Router, public loginService: HttpservicesService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.loginService.isUserLoggedIn();
    // this.isUserLoggidIn = this.hardcodedAuthenticationervice.isUserLoggedIn();
  }
  openModalWithComponent() {
    //   this.router.navigate(['services']);

    this.bsModalRef = this.modalService.show(CustomerServiceModelComponent, Object.assign({}, { class: 'gray modal-lg' }));
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}



