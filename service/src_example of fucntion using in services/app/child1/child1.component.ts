import { Component, OnInit } from '@angular/core';
import {NumberService}from '../number.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
/* Create the application which contains two services named as Number and String.Number 
    service contains one method named as ChkPrime() which accepts number and check 
   whether that number is prime or not. String service contains one method named as
   CountCapital() which counts number of capital characters and return its count.
   We have to create two child component named as Child1 & Child2 under app component Child1 uses 
   Number service & Child2 uses String service using Dependency Injection. Call both the methods 
  from the respective components by passing some hardcoded values and display the result.*/
export class Child1Component implements OnInit {
public num;
public test;

  constructor(private _numberserv:NumberService) { }

  ngOnInit(): void {
    this.test=this._numberserv.GetChkPrime(22);

  }

}
