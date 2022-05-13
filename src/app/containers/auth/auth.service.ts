import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {

  header = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"});

  constructor(private http: HttpClient) { }

  login(body:any) {
    console.log(body);
    
    return this.http.post(`${environment.MainApi}/login/vendorLogin`,body)
      .pipe(
        // map(
        //   result => {
        //   localStorage.setItem('access_token', result.token);
        //   return true;
        // }
        // )
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  register(body:any):Observable<any>{
    return this.http.post<any>(`${environment.MainApi}/register/vendorRegister`,body,{'headers':this.header})
  }


}