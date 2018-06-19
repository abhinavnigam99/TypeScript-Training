import { Component } from '@angular/core';

@Component({
    selector:'home-component',
    templateUrl : './home.component.html'
})

export class HomeComponent{
    appName : string = 'Employee Management Application';
    appDev : string = 'Abhinav Nigam';
    teamSize : number = 5;
    value = false;
}