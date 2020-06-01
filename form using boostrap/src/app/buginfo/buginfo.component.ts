import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buginfo',
  templateUrl: './buginfo.component.html',
  styleUrls: ['./buginfo.component.css']
})
export class BuginfoComponent implements OnInit {

   public minDate: Date;
   public maxDate: Date;
   
   hoursPlaceholder = 'hh';
   minutesPlaceholder = 'mm';
   secondsPlaceholder = 'ss';
 bugInfoForm = new FormGroup({
  dateTime: new FormControl(''),
  impact: new FormControl(''),
  bugDescription: new FormControl(''),
});
  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
   }
  
  ngOnInit(): void {
  }

}
