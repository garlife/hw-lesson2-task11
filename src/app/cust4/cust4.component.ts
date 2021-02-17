import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust4',
  template: `<p>cust4 template и style</p>`,
  styles: [`p {color: indigo}`]
})
export class Cust4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
