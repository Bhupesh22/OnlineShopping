import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordChecker } from "../custom-validator/password-checker";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm : FormGroup;

  constructor(private formBuidler : FormBuilder) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuidler.group({
      useremail : new FormControl('',[Validators.required, Validators.email]),
      oldpassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
      newpassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmnewpassword : new FormControl('',[Validators.required,Validators.minLength(6)])
    },{
      validators: PasswordChecker("newpassword", "confirmnewpassword"),
    });
  }

  get k(){
    return this.forgotPasswordForm.controls;
  }

  doChangePassword(){

  }
  
}
