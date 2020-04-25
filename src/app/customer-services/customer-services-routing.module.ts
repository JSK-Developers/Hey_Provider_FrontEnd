import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerServicesComponent } from './customer-services.component';

const routes: Routes = [
    {
        path: '', component: CustomerServicesComponent,
        children: [
            {
                path: '',
                redirectTo: '',
            }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerServicesRoutingModule { }