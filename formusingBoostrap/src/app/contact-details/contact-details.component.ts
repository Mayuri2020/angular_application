import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
public batches=['Preplacement Activity','logic building','Python','Angular','Industrial Project development']
  constructor() { }

  ngOnInit(): void {
  }

}
