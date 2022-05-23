import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {

  access_token: any
  private _authenticated: boolean = false;

  header = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  constructor(private http: HttpClient) { }

  // set accessToken(token: string) {
  //   sessionStorage.setItem('accessToken', this.access_token);
  // }

  // get accessToken(): string {
  //   return (sessionStorage.getItem('accessToken') ?? '');
  // }

  check(): Observable<boolean> {


    // Check if the user is logged in
    if (this._authenticated) {
      return of(true);
    }

    // Check the access token availability
   

    // Check the access token expire date
    // if (AuthUtils.isTokenExpired(this.accessToken)) {
    //     return of(false);
    // }

    // If the access token exists and it didn't expire, sign in using it
    // return this.signInUsingToken();
    return of(true);
  }

  login(body: any) {
    console.log(body);

    return this.http.post(`${environment.MainApi}/login/vendorLogin`, body)
      .pipe(
        map(
          (result: any) => {            
            return result;
          }
        )
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  register(body: any): Observable<any> {
    return this.http.post<any>(`${environment.MainApi}/register/vendorRegister`, body, { 'headers': this.header })
  }

  getAuthStatus(){
    if (sessionStorage.getItem('access_token') != null) return true
    else return false

  }

}