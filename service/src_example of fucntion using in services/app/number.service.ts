import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
private num;
private test;
  constructor() { }
  GetChkPrime(num){
    for(var i=2;i<=num;i++){
      if(num%2===0){
        return false;
      }
      return  true ; 
    }      
  }
}
