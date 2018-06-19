import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { EmployeeComponent } from '../employee/employee.component';
import { TestMyServiceComponent } from '../test-my-service/test-my-service.component';
import { CalculationService } from '../calculationService/calculation.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    EmployeeComponent,
    TestMyServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
