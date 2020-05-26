import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { DemoComponent } from './demo/demo.component';
import { ArithmeticService } from './arithmetic.service';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ArithmeticService],

  bootstrap: [AppComponent],
 
})
export class AppModule { }
