import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Cust1Component } from './cust1/cust1.component';
import { Cust2Component } from './cust2/cust2.component';
import { Cust3Component } from './cust3/cust3.component';
import { Cust4Component } from './cust4/cust4.component';

@NgModule({
  declarations: [
    AppComponent,
    Cust1Component,
    Cust2Component,
    Cust3Component,
    Cust4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
