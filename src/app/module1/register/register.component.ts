import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showLoader: boolean;

  constructor() { }

  ngOnInit() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 2500);
  }

  submitform(myform) {
    console.log(myform.value);
  }

}
