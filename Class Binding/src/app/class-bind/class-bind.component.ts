import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-bind',
  templateUrl: './class-bind.component.html',
  styleUrls: ['./class-bind.component.css']
})
export class ClassBindComponent implements OnInit {
public MyClass= "success";
public IsSet= "false";
  constructor() { }

  ngOnInit(): void {
  }

}
