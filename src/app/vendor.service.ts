import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Vendor } from './Vendor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  // getVendorList(): Observable<Vendor[]> {
  //   return this.http.get<Vendor[]>(this.baseUrl+'/vendordetails');
  // }
  

  baseUrl = 'http://localhost:8282/APIVendor/api';
  vid:number;
  constructor(private http: HttpClient) { }


  getVendor(vid : number): Observable<any> {
    console.log(this.vid);
    return this.http.get(this.baseUrl+'/vendorbyid/'+vid);
  }

  getVendors() {
    return this.http.get<Vendor[]>(this.baseUrl+'/vendordetails/null');
   }
  
   
  createVendor(vendor: Vendor): Observable<Object> {

    console.log(vendor);
    return this.http.post(this.baseUrl+'/insertvendordetails', vendor);
    
  }

  updateVendor(vid: number,vendor:Vendor): Observable<any> {
  
    return this.http.put(this.baseUrl+'/updatevendordetails',vendor);
  }

  deleteVendor(vid: number,  vendor:Vendor): Observable<any> {

    return this.http.put(this.baseUrl+'/disablevendor/'+vid, vendor);
  }

  getVendorDetails(): Observable<any> {
    return this.http.get(this.baseUrl+'vendordetails/:vid');
  }
  
  search(searchString:String):Observable<Vendor[]>
  {
return this.http.get<Vendor[]>(this.baseUrl+'/vendordetails/'+searchString);
  }
}
