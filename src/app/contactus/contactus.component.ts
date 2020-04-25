import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { RegistrationField, ContactusField } from '../booking-form/bookingfield';
import { HttpservicesService } from '../Http_Services_Api/httpservices.service';
import { Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'warning',
  message: 'Data Submitted Sucesfully',
}
];

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  registrationForm: FormGroup;
  submitted: boolean = false;
  registrationfield: ContactusField;
  alerts: Alert[];
  constructor(private formbulder: FormBuilder, private userRegistrationServices: HttpservicesService,
    private router: Router) {
    this.registrationForm = formbulder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    })
    this.registrationfield = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  }

  ngOnInit() {
  }

  get f() {
    return this.registrationForm.controls;
  }
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  PostData(registrationForm) {
    this.submitted = true;
    if (this.registrationForm.valid) {
      this.registrationfield.name = this.registrationForm.get('userName').value;
      this.registrationfield.email = this.registrationForm.get('email').value;
      this.registrationfield.subject = this.registrationForm.get('subject').value;
      this.registrationfield.message = this.registrationForm.get('message').value;
      this.alerts = Array.from(ALERTS);
      this.userRegistrationServices.concatus(this.registrationfield).subscribe(registrationForm => {
        this.registrationForm.reset();
      }, error => {
        console.log("error");
      }
      )

    }

  }

}
