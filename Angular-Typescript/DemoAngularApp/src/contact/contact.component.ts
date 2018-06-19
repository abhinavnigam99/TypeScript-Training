import {Component} from '@angular/core';

@Component({
    selector:'contact-component',
    templateUrl: './contact.component.html'
})

export class ContactComponent{
    contactNo : number = 123456;
    emailAddress : string = 'abc@xyz.com';
    hqaAddress : string = '123 abcd';
    branchAddress : string = 'abcd 123';
    username:string = '';

    greetings(name:string):string{
        return 'Welcome to My App, Dear ' + name;
    }
}