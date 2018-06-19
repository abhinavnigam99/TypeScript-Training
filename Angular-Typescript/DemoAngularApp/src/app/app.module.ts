import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { EmployeeComponent } from '../employee/employee.component';
import { TestMyServiceComponent } from '../test-my-service/test-my-service.component';
import { CalculationService } from '../calculationService/calculation.service';
import { RestCallComponent } from '../rest-call/rest-call.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    EmployeeComponent,
    TestMyServiceComponent,
    RestCallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
