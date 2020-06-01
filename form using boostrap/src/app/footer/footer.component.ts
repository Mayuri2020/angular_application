import { Component, OnInit, Input } from '@angular/core';
//import {FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
public name:"";
public email:"";
  constructor()
   {
     
    
  }
  
  //alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
  ngOnInit(): void {
  
  }
}
