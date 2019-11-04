import { Component, OnInit } from '@angular/core';
import { ToastrService} from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updatevendor',
  templateUrl: './updatevendor.component.html',
  styleUrls: ['./updatevendor.component.css']
})
export class UpdateVendorComponent implements OnInit {

  vid: number;
  vendor: Vendor;
  editVendorForm: FormGroup;
  vendors: any;

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private router: Router,private vendorService: VendorService,private toastr:ToastrService) { }

  ngOnInit() {
    this.createForm();
   
    this.vid=this.route.snapshot.params['vid'];
    this.vendorService.getVendor(this.vid)
    .subscribe(data=>{
      console.log("init"+data)
      this.vendor=data;

    },error=>console.log(error));
    
   
  }

  createForm() {
    this.editVendorForm = this.fb.group({
      vname: ['', Validators.required ],
      vaddress: ['', Validators.required ],
      vlocation: ['', Validators.required ],
      vservice: ['', Validators.required ],
      pincode: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]+')]],
      cname:['',Validators.required],
      department :['',Validators.required],
      email:['',Validators.required,Validators.email],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]+')]]
    
    });
  }

  onSubmit(){ 
    this.updateVendor();
  }

  updateVendor(){
    console.log("TS update"+this.vid+this.vendor);
    this.vendorService.updateVendor(this.vid,this.vendor)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.toastr.success('Vendor Successfully updated','Vendor Updation Status');
    this.vendor=new Vendor();
    this.vendorService.getVendors();
    this.gotoList();
  }

  gotoList(){
    this.vendors = this.vendorService.getVendors();
    this.vendorService.getVendors();

    this.router.navigate(['home/vendordet']);
  }

}