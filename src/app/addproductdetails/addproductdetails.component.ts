import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AddproductdetailsService } from '../services/addproductdetails.service';

@Component({
  selector: 'app-addproductdetails',
  templateUrl: './addproductdetails.component.html',
  styleUrls: ['./addproductdetails.component.css']
})
export class AddproductdetailsComponent implements OnInit {

  retaileremail : string = sessionStorage.getItem('retaileremail');
  status:any;
  //retailer : any = [];
  retailerid : any;
  constructor(private router:Router,private addproductserv : AddproductdetailsService) { }

  ngOnInit(): void {
    this.status = this.addproductserv.getRetailerId(this.retaileremail).subscribe(
      data =>{
        if(data !="Invalid"){
          //this.retailer = data;
          this.retailerid = data;
          console.log(this.retailerid);
        }
      }
    )
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['retailerlogin']);
  }
  addproduct(){
    /*this.status = this.addproductserv.getRetailerId(this.retaileremail).subscribe(
      data =>{
        if(data !="Invalid"){
          this.retailer = data;
          console.log(this.retailer);
        }
      }
    )*/
  }
}
