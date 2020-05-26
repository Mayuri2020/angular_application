import { Component, OnInit } from '@angular/core';
import{ ArithmeticService}from'../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
/* Create the application which contains one service named as Arithmetic. Arithmetic service 
contains two methods named as Add and Sub. Both of this methods accepts two integers and perform 
addition and subtraction respectively. We have to create one child component named as Demo under 
app component which uses Arithmetic service using Dependency Injection. That methods from the service
add and sub should be called from Demo component by passing some hardcoded values. And display the 
result of addition and subtraction inside Demo component. */

export class DemoComponent implements OnInit {
public no1:number;

public no2:number;
public add:number;
public sub:number;

  constructor(private _Arserv:ArithmeticService) { }

  ngOnInit(): void {

  this.add=this._Arserv.getAdd(21,21);

this.sub=this._Arserv.getSub(21 ,18);
  }
  
}
