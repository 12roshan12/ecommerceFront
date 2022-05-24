import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Orderservice {

   header = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"});

  constructor( private _http:HttpClient, ) {
   } 
  

//    to be deleted 8888888888888888888888888888888888888888888888
//   getCategory() {
//     return this._http.get(`${environment.MainApi}/category/getcategory`).pipe();
//   }
//   getSubCategory() {
//     return this._http.get(`${environment.MainApi}/subcategory/getsubcategory`).pipe();
//   }

//   getType() {
//     return this._http.get(`${environment.MainApi}/type/getType`).pipe();
//   }
//   getproductsbyVendor(vendorId:any) {
//     return this._http.get(`${environment.MainApi}/products/getProductbyVendorid/${vendorId}`).pipe();
//   }
//   getproductsbyid(id:any) {
//     return this._http.get(`${environment.MainApi}/products/getProductbyid/`+id).pipe();
//   }

//   addproducts(body:any): Observable<any> {
//     return this._http.post<any>(`${environment.MainApi}/products/addproducts`,body,{'headers':this.header}).pipe();
//   }

//   updateProducts(body:any, id:any): Observable<any> {
//     return this._http.put<any>(`${environment.MainApi}/products/updateproducts/${id}`,body,{'headers':this.header}).pipe();
//   }

//   addImages(image:any){ 
//      return this._http.post<any>(`${environment.MainApi}/api/upload`,image).pipe();
//   }
//   addSubImages(image:any,i){ 
//     return this._http.post<any>(`${environment.MainApi}/api/upload${i}`,image).pipe();
//  }

//   getImages(){
//     return this._http.get<any>(`${environment.MainApi}/images/getimages`).pipe();    
//   }

//   deleteProduct(id:any){
//     return this._http.delete<any>(`${environment.MainApi}/products/deleteproducts/${id}`).pipe();
//   }

  // TO BE DELETED 888888888888888888888888888888888888888888888


  getOrdersbyVendor(vendorId:any) {
        return this._http.get(`${environment.MainApi}/orders/getordersbyVendorid/${vendorId}`).pipe();
      }


}
