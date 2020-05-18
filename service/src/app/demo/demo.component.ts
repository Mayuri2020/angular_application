import { Component, OnInit } from '@angular/core';
import{ ArithmeticService}from'../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
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
