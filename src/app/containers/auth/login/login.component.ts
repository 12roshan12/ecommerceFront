import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formBuilder()
  }

  formBuilder() {
    this.loginForm = this._formBuilder.group({
      vendorId: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {

    if (this.loginForm.invalid) {
      Swal.fire('Error', 'Invalid Form Details', 'error');
      return
    }



    this._authService.login(this.loginForm.value).subscribe(

      (response: any) => {


        if (response.status == 200) {
          Swal.fire('Success', `${response.message}`, 'success');
          this.router.navigate(['/dashboard'])
        }
        else {
          Swal.fire('Login Error', `${response.message}`, 'error');

        }


      },
      (error) => {
        console.log(error);
        
        Swal.fire('Error', `${error.error.error}`, 'error');
        this.loginForm.reset()
        console.log(error);
      })
  }

}


