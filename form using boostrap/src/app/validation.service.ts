import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
private name: string;
private email: string;
  constructor() { }

  getclickMethod(name:string, email:string) {
    if (name.length != 0 && email.length != 0) {
     alert(`Your Name:${this.name} Email: ${this.email}`);
    }
  }
}
