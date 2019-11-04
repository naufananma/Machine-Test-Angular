import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{Loginuser} from '../loginuser';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  isSubmitted=false;
  Loginuser:Loginuser;
  constructor(private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.LoginForm=this.formBuilder.group({
    username:['',Validators.compose([Validators.required])],
    password:['',[Validators.required]]
  });
}
  get formControls() { 
    return this.LoginForm.controls; }

login(){
console.log(this.LoginForm.value);
this.isSubmitted=true;
if(this.LoginForm.valid){
  
  this.authService.login(this.LoginForm.value).subscribe(
    data =>{
      this.Loginuser=data;
      console.log(data);
      console.log(data.roleid);
      
    if(data.roleid!=null && data.roleid==100) {
      this.isSubmitted=true;
      console.log('admin');
      this.router.navigateByUrl('home/vendordet');
    }
   else{
     console.log('user');
     window.alert("invalid username or password");
   }
    }
  );
 
}
}
}