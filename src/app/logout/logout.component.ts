import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from '../Http_Services_Api/httpservices.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private logoutservices: HttpservicesService,
  ) { }

  ngOnInit() {
    this.logoutservices.logout();
  }

}
