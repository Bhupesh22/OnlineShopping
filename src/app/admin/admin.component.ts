import { Component, OnInit } from '@angular/core';
import { Retailer } from '../model/retailermodel';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  retailerList : any = []
  status : any
  result : string;
  otpstatus :any;

  constructor(private adminserv : AdminserviceService) { }

  ngOnInit(): void {
    this.retailerList = this.adminserv.getRetailers().subscribe(
      data=>{this.retailerList = data;}
    );
  }
  ApporveRetailer(retailerid :number, retaileremail:string){
    this.status = this.adminserv.sendApproval(retailerid, retaileremail).subscribe(
      data=>{
        this.result = data;
        if(this.result == "Approved"){
          //function
          this.sendemail(retaileremail);
        }
      }
    )  
  }
  sendemail(retaileremail : string){
    this.otpstatus = this.adminserv.sendemail(retaileremail).subscribe(
      data => {
        this.otpstatus = data;
        if(this.otpstatus){
          alert("Retailer is approved. Mail sent to retailer");
          window.location.reload();
        }
      }
    )
  }

}
