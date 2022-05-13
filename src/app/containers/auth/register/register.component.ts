import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [DatePipe]

})
export class RegisterComponent implements OnInit {

  registerFrom:FormGroup
  date = new Date()

  constructor(private _formBuilder:FormBuilder,private _authService:AuthService,private router:Router) { }

  ngOnInit(): void {

    this.formBuilder()

  }


  formBuilder(){
    this.registerFrom = this._formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      vendorId:['',Validators.required],
      address:['',Validators.required],
      phoneNumber:['',Validators.required],
      createdBy:['',],
      createdOn:[this.date],
      updatedBy:[''],
      updatedOn:['']
    })

  }

  registerVendor(){

    if(this.registerFrom.invalid){
      Swal.fire('Alert', 'Fill From Correctly', 'warning');
      return
    }

    console.log(this.registerFrom.value);
    

    this._authService.register(this.registerFrom.value).subscribe((e:any)=>{
      Swal.fire('Done', 'Registration Success', 'success');

      this.router.navigate(['/login'])
      console.log(e)
    })
  }

}
