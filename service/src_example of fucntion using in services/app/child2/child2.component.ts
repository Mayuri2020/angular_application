import { Component, OnInit } from '@angular/core';
import { StringService } from '../String.Service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
public  arr;
  constructor(private _stringservice:StringService ) { }

  ngOnInit(): void {
 
 this.arr=this._stringservice.getCountCapital("ABCDE");
  }
}
