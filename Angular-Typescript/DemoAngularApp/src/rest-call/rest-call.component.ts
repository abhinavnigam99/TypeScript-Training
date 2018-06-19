import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { makeDecorator } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-rest-call',
  templateUrl: './rest-call.component.html',
  styleUrls: ['./rest-call.component.css']
})

export class RestCallComponent {

  constructor(private _http : HttpClient) { }

  restData:any;
  makeCall = this._http.get('https://jsonplaceholder.typicode.com/photos').subscribe((result) => {this.restData = result});
}
