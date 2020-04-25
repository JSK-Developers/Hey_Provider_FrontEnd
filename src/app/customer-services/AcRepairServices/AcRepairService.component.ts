import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { CustomerServicesComponent } from '../customer-services.component';
import { CustomerServiceModelComponent } from '../customer-service-models/customer-services-model.component';
@Component({
    selector: 'app-AcRepairService-model',
    templateUrl: './AcRepairService.component.html',
    styleUrls: ['./AcRepairService.component.scss']
})
export class ACServiceModelComponent {
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
    customerModel: CustomerServicesComponent;
    AcModel: CustomerServiceModelComponent;
    constructor(private modalService: BsModalService, public ACModalRef: BsModalRef, private router: Router) {
    }


    updateCount(adjustment = 1) {
        this.values = (this.count += adjustment) * this.prize;
        return this.values;
        // if (this.count == 0) {
        //     this.hide = !this.hide;
        //     this.count = 1
        //     this.valuess = this.count;
        //     return this.valuess;
        // } else {
        //     if (this.valuess == 1) {

        //         this.hide = false;
        //     }
        //     this.valuess = this.count += adjustment;
        //     return this.valuess;
        // }
        // return (this.count * this.prize);
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
    // total = ((this.updateCount().value + this.updateCount1() + this.updateCount2() + this.updateCount3() + this.updateCount4() + this.updateCount5());

    // get blocks() {
    //     return '&#9609;'.repeat(this.count);
    // }
    finalvalue() {
        this.total = this.values + this.values1 + this.values2 + this.values3 + this.values4 + this.values5;
        alert('Your Total Prize is ' + this.total);

        this.router.navigate(['AcService']);
    }
}
