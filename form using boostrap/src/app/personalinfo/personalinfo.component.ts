import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { BuginfoComponent } from '../buginfo/buginfo.component';


@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {
  constructor()
    { 
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  ngOnInit(): void {
  }
  onSubmit() {
    console.log("on submit click")
    console.log(this.profileForm.value);
    var msg = "You have submitted " 
    + this.profileForm.controls.firstName.value + " " 
    + this.profileForm.controls.lastName.value + " "
    + this.profileForm.controls.email.value
    alert(msg)
  }// {email: '...', password: '...'}
  }  // ... <-- now use JSON.stringify() to convert form values to json.

