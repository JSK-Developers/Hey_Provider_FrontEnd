import { Component, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { BsDatepickerConfig, BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Observable } from 'rxjs';
import { ACregistrationfield } from './bookingfield';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpservicesService } from '../Http_Services_Api/httpservices.service';
import { CustomerServicesComponent } from '../customer-services/customer-services.component';
import { Providers } from './providerList';
// import Web3 from 'web3';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {
  modalRef: BsModalRef;
  username = "";
  message = 'helloworld'
  welcomeMessageFromService: string
  hello: 'smit'
  bookingForm: FormGroup;
  name: string = "";
  // email: string = "";
  number: string = "";
  time: string = "";
  addresss1: string = "";
  landmark: string = "";
  city: string = "";
  pincode: string = "";
  submitted: boolean = false;
  datePipe: Date;
  minDate: Date;
  colorTheme = 'theme-orange';
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  allbookings: Observable<BookingFormComponent>;
  bsConfig: Partial<BsDatepickerConfig>;
  ACregistrationfield: ACregistrationfield;
  serviceName = "Window AC Service";
  serviceName1 = "Split AC Service";
  serviceName2 = "Less/No Cooling";
  serviceName3 = "AC Not Starting";
  serviceName4 = "Noise Issue";
  serviceName5 = "Water Leakege";
  values: number = 0;
  values1: number = 0;
  values2: number = 0;
  values3: number = 0;
  values4: number = 0;
  values5: number = 0;
  total: number;
  count = 0;
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  prize = 100;
  prize1 = 100;
  prize2 = 100;
  prize3 = 100;
  prize4 = 100;
  prize5 = 100;
  providerid: any = '';
  customerModel: CustomerServicesComponent;
  prizelist = true;
  address_provider = false;
  payment_display = false;
  starting_otp = Math.floor(100000 + Math.random() * 900000);
  ending_otp = Math.floor(100000 + Math.random() * 900000);
  constructor(formbulder: FormBuilder,
    private userRegistrationServices: HttpservicesService,
    private router: Router, private modalService: BsModalService,
  ) {
    this.username = userRegistrationServices.username;
    console.log(this.starting_otp);
    console.log(this.ending_otp);


    this.prizelist = true;
    this.address_provider = false;
    this.payment_display = false;
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.bookingForm = formbulder.group({
      name: ['', Validators.required],
      // email: ['', Validators.compose([
      //   Validators.required,
      //   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      // ])],
      number: ['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+))$/)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      addresss1: ['', Validators.required],
      landmark: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^(\d{6}|\w+([\.-]?\w+))$/)]],
      acceptTerms: [false, Validators.requiredTrue],
      activeStatus: [0],
    })
    this.ACregistrationfield = {
      name: '',
      number: null,
      date: '',
      time: '',
      addresss1: '',
      landmark: '',
      city: '',
      pincode: null,
      providerid: null,
      userid: null,
      end_services_otp: null,
      window_ac_service: null,
      split_ac_service: null,
      less_no_cooling: null,
      ac_not_starting: null,
      noise_issue: null,
      water_leakege: null,
      total: null,
      activeStatus: 0
    }
  }
  get f() {
    return this.bookingForm.controls;
  }

  ngOnInit() {
    this.getlist();
    this.loginid();
  }
  loginid() {
    this.userRegistrationServices.getUserId().subscribe(
      data => {
        console.log(data[0]);
      }
    )
  }
  PostData(bookingForm) {
    console.log(bookingForm.controls);
    this.submitted = true;
    // this.userRegistrationServices.getRegistrationListByName(this.username).subscribe(
    //   data => {

    this.userRegistrationServices.getUserId().subscribe(
      data => {
        const userid: any = data;
        this.ACregistrationfield.userid = userid;
        this.ACregistrationfield.name = this.bookingForm.get('name').value;
        this.ACregistrationfield.number = this.bookingForm.get('number').value;
        this.ACregistrationfield.date = this.bookingForm.get('date').value;
        this.ACregistrationfield.time = this.bookingForm.get('time').value;
        this.ACregistrationfield.addresss1 = this.bookingForm.get('addresss1').value;
        this.ACregistrationfield.landmark = this.bookingForm.get('landmark').value;
        this.ACregistrationfield.pincode = this.bookingForm.get('pincode').value;
        this.ACregistrationfield.city = this.bookingForm.get('city').value;
        this.ACregistrationfield.providerid = this.providerid;
        this.ACregistrationfield.window_ac_service = this.count;
        this.ACregistrationfield.split_ac_service = this.count1;
        this.ACregistrationfield.less_no_cooling = this.count2;
        this.ACregistrationfield.ac_not_starting = this.count3;
        this.ACregistrationfield.noise_issue = this.count4;
        this.ACregistrationfield.water_leakege = this.count5;
        this.ACregistrationfield.total = this.total;
        this.ACregistrationfield.activeStatus = 0;
        this.ACregistrationfield.end_services_otp = this.ending_otp;
        if (this.bookingForm.valid) {
          this.save();
        }
      })
  }
  save() {
    this.userRegistrationServices.ACservicebook(this.ACregistrationfield).subscribe(() => {
      console.log('register success');
      this.router.navigate(['/thankYou'])
    }, () => {
      console.log("error");
    }
    )
  }
  // createbook(book: BookingFormComponent) {
  //   this.bookingservices.servicebook(book).subscribe
  // }
  deleteUser(id) {
    console.log(id);
    this.providerid = id;
  }
  onReset() {
    this.submitted = false;
    this.bookingForm.reset();
  }
  onNext() {

    if (this.bookingForm.valid) {
      this.address_provider = false;
      this.payment_display = true;
      this.PostData(this.bookingForm.value);
    }
  }
  updateCount(adjustment = 1) {
    this.values = (this.count += adjustment) * this.prize;
    return this.values;
  }
  updateCount1(adjustment = 1) {
    this.values1 = (this.count1 += adjustment) * this.prize1;
    return this.values1;
    // return (this.count1 * this.prize1);
  }
  updateCount2(adjustment = 1) {
    this.values2 = (this.count2 += adjustment) * this.prize2;
    return this.values2;
  }
  updateCount3(adjustment = 1) {
    this.values3 = (this.count3 += adjustment) * this.prize3;
    return this.values3;
  }
  updateCount4(adjustment = 1) {
    this.values4 = (this.count4 += adjustment) * this.prize4;
    return this.values4;
  }
  updateCount5(adjustment = 1) {
    this.values5 = (this.count5 += adjustment) * this.prize5;
    return this.values5;
  }
  finalvalue() {
    this.total = this.values + this.values1 + this.values2 + this.values3 + this.values4 + this.values5;
    // if (this.total > 0) {
    //   alert('Your Total Prize is ' + this.total);


    // }
    // else {
    //   alert("please select services");
    // }
  }
  seeform() {
    this.address_provider = true;
    this.prizelist = false;
  }
  Providers: Providers;

  rate: any = 7;
  isReadonly: boolean = true;
  providers: Observable<Providers[]>;
  getlist() {
    this.userRegistrationServices.getProviderList().subscribe(
      data => {
        this.providers = data;
        console.log(this.providers);
      }
    )
  }
  /* blockchain */
  openModal(template: TemplateRef<any>) {
    if (this.total > 0) {
      this.modalRef = this.modalService.show(template);
    }
  }



}



