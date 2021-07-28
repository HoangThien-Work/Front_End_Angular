import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errorMessage: string;
  successMessage: string;

  constructor(private fb: FormBuilder, 
              private auth: FirebaseAuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({ 
    email:['',Validators.required], 
    password:['',[Validators.required]],
  });
  }

  registerForm : FormGroup;

  backtologin(){
    this.router.navigateByUrl('login');
  }

  tryRegister(value: any){
    this.auth.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      // this.errorMessage = err.message;
      alert("email is badly formatted");
      this.successMessage = "";
    })
  }
}
