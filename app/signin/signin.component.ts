import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  siginin = {
    fullName:'',
    userName:'',
    email:'',
    password:'',
    confrimPassword:'',
    acceptTerms:false
  }

  ngOnInit(): void {
  }
  loginUser(siginIn: NgForm) {
  console.log(JSON.stringify(this.siginin,null,2))
  }
  onRest(form:NgForm){
    form.reset()
  }
}
