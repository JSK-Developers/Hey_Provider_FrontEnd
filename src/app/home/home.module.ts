import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal'
import { HeaderImgComponent } from '../header-img/header-img.component';
import { MiddleHomeComponent } from '../middle-home/middle-home.component';
import { HomeRouting } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
       
    ],
    entryComponents: [
    ],
    imports: [
        FormsModule,
        ModalModule.forRoot(),
        CommonModule,
        HomeRouting,
    ]
})
export class HomeModule { }