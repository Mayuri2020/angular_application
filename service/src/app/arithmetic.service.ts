import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {
private no1:number;no2:number;add:number;sub:number;


  constructor() { }


  
getAdd(no1:number,no2:number)
{
   var add= no1+no2;

console.log(add);
return add
}
getSub(no1:number,no2:number)
{
   var sub=no1-no2;
  
  console.log(sub);
 return sub;
  
}

}

