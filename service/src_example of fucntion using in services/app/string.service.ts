import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StringService {
  constructor() { }
 getCountCapital(Str)
 {
   var count=0;
   var len=Str.length
   for(var i=0;i<Str.length;i++)
   {
    if(Str.charAt(i)>='A'&& Str.charAt(i)<='Z'){
       count ++;
    }
    else if(Str.charAt(i)>='a'&& Str.charAt(i)<='z')
    {
      count --;
    }
    
   }
   return  count;
}
}

