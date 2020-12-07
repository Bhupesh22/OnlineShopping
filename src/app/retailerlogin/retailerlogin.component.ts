import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { PasswordChecker } from "../custom-validator/password-checker";
import {RetailerloginService} from '../services/retailerlogin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-retailerlogin',
  templateUrl: './retailerlogin.component.html',
  styleUrls: ['./retailerlogin.component.css']
})
export class RetailerloginComponent implements OnInit {

  loginForm : FormGroup;
  retaileremail:string;
  retailerpassword:string;
  status:any;
  message:any;

  constructor(private formBuilder:FormBuilder, private retailserv : RetailerloginService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      retaileremail : new FormControl('',[Validators.email, Validators.required]),
      retailerpassword : new FormControl('',[Validators.required, Validators.minLength(6)])
    })
    sessionStorage.clear();
  }

  get h(){
    return this.loginForm.controls;
  }

  doLogin(){
      this.status = this.retailserv.checkLogin(this.loginForm.value.retaileremail,this.loginForm.value.retailerpassword).subscribe(
        data =>{
          if(data=="valid"){
              sessionStorage.setItem('retaileremail',this.loginForm.value.retaileremail);
              this.router.navigate(['addproductdetails']);
          }else{
            alert('Invalid credentials or Retailer not approved');
          }
        }
      )
  }

}
