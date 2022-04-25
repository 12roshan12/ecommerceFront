import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   header = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"});

  constructor( private _http:HttpClient, ) {
   } 
  
  getCategory() {
    return this._http.get(`${environment.MainApi}/category/getcategory`).pipe();
  }
  getSubCategory() {
    return this._http.get(`${environment.MainApi}/subcategory/getsubcategory`).pipe();
  }
  getproducts() {
    return this._http.get(`${environment.MainApi}/products/getproducts`).pipe();
  }

  addproducts(body:any): Observable<any> {
    return this._http.post<any>(`${environment.MainApi}/products/addproducts`,body,{'headers':this.header}).pipe();
  }

  addImages(image:any){ 
     return this._http.post<any>(`${environment.MainApi}/api/upload`,image).pipe();
  }
  addSubImages(image:any){ 
    return this._http.post<any>(`${environment.MainApi}/api/upload/multiple`,image).pipe();
 }

  getImages(){
    return this._http.get<any>(`${environment.MainApi}/images/getimages`).pipe();
    
  }


}
