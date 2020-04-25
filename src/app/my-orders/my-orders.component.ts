import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpservicesService } from '../Http_Services_Api/httpservices.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  allBookingDetail: any[] = [];
  date: Date;
  id: number = null;
  username: any;

  constructor(
    private bookingService: HttpservicesService,
    public datepipe: DatePipe,
    private router: Router
  ) {
    this.username = bookingService.username;
    console.log(this.username);
  }

  CompleteStatus = 'Done';
  loginUserId(username) {
    this.bookingService.getRegistrationListByName(username).subscribe(
      data => {

        this.id = data[0].id;
        console.log(data[0]);
      }
    )
  }
  getuserdetail() {
    this.bookingService.getUserId().subscribe(
      data => {
        this.refreshUser(data);
      }
    )
  }
  ngOnInit() {
    this.getuserdetail();
  }
  userOrderDetail;
  refreshUser(id) {
    this.bookingService.MyOrderDetailById(id).subscribe(
      response => {
        this.userOrderDetail = response;
        console.log(this.userOrderDetail);
      }
    )
  }

}
