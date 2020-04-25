import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { RegistrationField, ACregistrationfield, ContactusField } from '../booking-form/bookingfield';
import { Router } from '@angular/router';
import { MyOrderField } from '../my-orders/my-order';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class HttpservicesService {

    constructor(private httpclient: HttpClient,
        private router: Router) { }
    public username;
    isUserLoggedIn() {
        let user = localStorage.getItem('UserName');
        return !(user === null);
    }
    logout() {
        localStorage.removeItem('UserName');
        this.router.navigate(['/logout']);
    }
    getUserId() {
        let name = localStorage.getItem('UserName');
        const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
        return this.httpclient.get('http://localhost:8080/api/' + `${name}`, { headers });
    }

    ServicesUrl = 'http://localhost:8080/api/';
    ProviderServicesUrl = 'http://localhost:8080/apiProvider';
    baseUrl = 'http://localhost:8080/';

    ACservicebook(bookingfield: ACregistrationfield): Observable<any> {
        const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
        return this.httpclient.post(this.ServicesUrl + 'AC_Service_Registration', bookingfield, { headers })
    }
    registration(registrationField: RegistrationField): Observable<any> {
        return this.httpclient.post(this.ServicesUrl + 'register', registrationField)
    }
    concatus(ContactusField: ContactusField): Observable<any> {
        return this.httpclient.post(this.baseUrl + 'apiContactus/createContactusDetail', ContactusField)
    }


    authenticate(userName, password) {
        return this.httpclient.post<any>(`${this.ServicesUrl}authenticate`, { userName, password });
    }

    // login(bookingfield: BookingField): Observable<any> {
    //     let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    //     let options = {
    //         headers: httpHeaders
    //     };
    //     return this.httpclient.post(this.ServicesUrl + 'register', bookingfield, options)
    // }
    public getProviderList(): Observable<any> {
        const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
        return this.httpclient.get(`${this.ProviderServicesUrl}` + '/provider/List', { headers });
    }
    public getRegistrationList(): Observable<any> {
        const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
        return this.httpclient.get(`${this.ServicesUrl}` + '/registration/List', { headers });
    }
    public getRegistrationListByName(name: String): Observable<any> {
        const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
        return this.httpclient.get(`${this.ServicesUrl}` + 'users/' + `${name}`, { headers });
    }
    public MyOrderDetailById(id: any) {
        const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
        return this.httpclient.get<MyOrderField>(`${this.ServicesUrl}` + 'myOrder/' + `${id}`, { headers });
    }

}
