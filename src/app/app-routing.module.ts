import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { PaymentComponent } from './payment/payment.component';
import { RoutGardServices } from './Http_Services_Api/routGard.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { CareersComponent } from './careers/careers.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { BlogComponent } from './blog/blog.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BecomeProfessionalComponent } from './become-professional/become-professional.component';
// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent
//   },
//   { path: 'login', component: LoginComponent },
//   { path: 'contactUs', component: ContactusComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'aboutUs', component: AboutUsComponent },
// ];
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'AcService', component: BookingFormComponent, canActivate: [RoutGardServices] },
  { path: 'MyOrders', component: MyOrdersComponent, canActivate: [RoutGardServices] },
  { path: 'payment', component: PaymentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'contactUs', component: ContactusComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'service-form', component: ServiceFormComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'thankYou', component: ThankYouPageComponent },
  { path: 'terms', component: TermsAndConditionsComponent },
  { path: 'privacyPolicy', component: PrivacyPolicyComponent },
  { path: 'becomeProfessional', component: BecomeProfessionalComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: ErrorComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]

})
export class AppRoutingModule {
  static forRoot: any;
}
