import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {VendorService } from '../vendor.service';
import { Vendor } from '../Vendor';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-vendordet',
  templateUrl: './vendordet.component.html',
  styleUrls: ['./vendordet.component.css']
})
export class VendordetComponent implements OnInit {
  public popoverTitle:string ='Delete';
  public popoverMessage:string ='Do you want to Disable ?';
  public confirmClicked: boolean= false;
  public cancelClicked:boolean=false;

  vendors: Observable<Vendor[]>

  constructor(private vendorService: VendorService, private authservice: AuthService,
    private router: Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    console.log("reloadata");
    this.vendors = this.vendorService.getVendors();
    console.log(this.vendors);
    console.log("reloadata done");
  }

  deleteVendor(vid: number,vendordet:Vendor){

    this.vendorService.deleteVendor(vid,vendordet)
    .subscribe(
      data => {
          console.log(data);
          this.reloadData();
      },
      error => {
          console.log(error);
          this.toastr.success('Vendor Successfully disabled','Vendor delete Status');
      });
  }
  

  vendorDetails(vid: number){
    console.log(vid);
    this.router.navigate(['/home/vendordetails',vid]);
  }
  updateVendor(vid:number){
    console.log(vid);
    this.router.navigate(['home/updatevendor',vid]);
  }

  //search
  searchString:String;
  search(searchString){
    console.log(searchString);
    if(searchString!=null){
      this.vendors=this.vendorService.search(this.searchString);
    }
    else{
      console.log("Else:"+searchString);
      this.reloadData();
    }
  }

  public logout(){
    this.authservice.logout();
    this.router.navigateByUrl('/login');
  }
  
  

}