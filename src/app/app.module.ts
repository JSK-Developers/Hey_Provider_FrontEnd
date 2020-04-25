import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // #####
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule, ModalModule, TabsModule, RatingModule } from 'ngx-bootstrap'; // #####
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { HeaderImgComponent } from './header-img/header-img.component';
import { MiddleHomeComponent } from './middle-home/middle-home.component';
import { CustomerServicesComponent } from './customer-services/customer-services.component';
import { CustomerServiceModelComponent } from './customer-services/customer-service-models/customer-services-model.component';
import { HttpModule } from '@angular/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HttpservicesService } from './Http_Services_Api/httpservices.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ACServiceModelComponent } from './customer-services/AcRepairServices/AcRepairService.component';
import { PaymentComponent } from './payment/payment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutGardServices } from './Http_Services_Api/routGard.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { CareersComponent } from './careers/careers.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { DatePipe } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BecomeProfessionalComponent } from './become-professional/become-professional.component';
import { WashingMachineServiceComponent } from './customer-services/WashingMachineServies/WashingMachineService.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ContactusComponent,
    AboutUsComponent,
    // HeaderImgComponent,
    // MiddleHomeComponent,
    WashingMachineServiceComponent,
    BookingFormComponent,
    HeaderImgComponent,
    MiddleHomeComponent,
    ErrorComponent,
    LogoutComponent,
    CustomerServicesComponent,
    CustomerServiceModelComponent,
    UserRegistrationComponent,
    ServiceFormComponent,
    ACServiceModelComponent,
    PaymentComponent,
    MyOrdersComponent,
    ThankYouPageComponent,
    CareersComponent,
    TermsAndConditionsComponent,
    BlogComponent,
    PrivacyPolicyComponent,
    BecomeProfessionalComponent,

  ],
  entryComponents: [
    CustomerServiceModelComponent,
    ACServiceModelComponent
  ],

  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    RatingModule.forRoot(),

    FormsModule, ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) // #####

  ],

  providers: [
    HttpservicesService,
    RoutGardServices,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
