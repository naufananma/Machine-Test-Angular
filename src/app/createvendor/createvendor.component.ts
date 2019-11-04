
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Observable } from 'rxjs';
import { ToastrService} from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';



@Component({
  selector: 'app-createvendor',
  templateUrl: './createvendor.component.html',
  styleUrls: ['./createvendor.component.css']
})
export class CreateVendorComponent implements OnInit {

  vendor: Vendor = new Vendor();
  submitted = false;
  addVendorForm: FormGroup;
  

  constructor(private fb: FormBuilder,private vendorService: VendorService,
    private router: Router,private toastr:ToastrService) { }

    vendors:Observable<Vendor[]>;
  

  ngOnInit() {
    this.createForm();
    
    
  }

  createForm() {
    this.addVendorForm = this.fb.group({
      vname: ['', Validators.required,Validators.minLength(3)],
      vaddress: ['', Validators.required,Validators.minLength(3)],
      vlocation: ['', Validators.required,Validators.minLength(3)],
      vservice: ['', Validators.required,Validators.minLength(3)],
      pincode: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]+')]],
      cname:['',Validators.required,Validators.minLength(3)],
      department :['',Validators.required,Validators.minLength(3)],
      email:['',Validators.required,Validators.email],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]+')]]


      
    });
  }

  onSubmit() {
    this.submitted = true;
    this.vendor = new Vendor();
    this.vendor.vname=this.addVendorForm.controls.vname.value;
    this.vendor.vaddress=this.addVendorForm.controls.vaddress.value;
    this.vendor.vlocation=this.addVendorForm.controls.vlocation.value;
    this.vendor.vservice=this.addVendorForm.controls.vservice.value;
    this.vendor.pincode=this.addVendorForm.controls.pincode.value;
    this.vendor.cname=this.addVendorForm.controls.cname.value;
    this.vendor.department=this.addVendorForm.controls.department.value;
    this.vendor.email=this.addVendorForm.controls.email.value;
    this.vendor.phone=this.addVendorForm.controls.phone.value;
    this.save();
    

  }
  
  private todate = new Date();
 
  
  newAsset(): void {
  this.submitted = false;
  this.vendor = new Vendor();
  }

 save(){
  console.log(this.vendor);
   this.vendorService.createVendor(this.vendor)
   .subscribe(data => console.log(data), error => console.log(error));
   this.vendorService.getVendors();
   this.toastr.success('New Vendor Successfully created','Vendor Creation Status');  
   this.gotoList();
  
   
 }
 

gotoList(){
  this.vendors = this.vendorService.getVendors();
  this.vendorService.getVendors();
  this.router.navigate(['/home/vendordet']);
}

}