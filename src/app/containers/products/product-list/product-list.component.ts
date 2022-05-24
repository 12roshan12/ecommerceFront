import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { fake } from '../fake';
import { environment } from '../../../../environments/environment'
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  productList: any;
  imageSrc: any ;

  constructor(private products: ProductService,private router:Router) { }

  ngOnInit(): void {

    this.products.getproductsbyVendor(130380407).subscribe((e: any) => {
      this.productList =  e.result.map(element => {
        const temp = element
        temp.mainImageUrl = `${environment.ImageApi}` + `${element.mainImageUrl}` 
        return temp
      });
      console.log(this.productList);      
    })

    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }

  update(event) {
    console.log(event);   
    this.router.navigate(['/products/product-add/' , event ])

  }

  edit(event){
    console.log(event);
    
    this.router.navigate(['/products/product-add/',event])
  }

  delete(event){
    console.log(event);

    Swal.fire({
      title: 'Do you want to Delete this Product?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.products.deleteProduct(event).subscribe((e:any)=>{
          console.log(e); 
          Swal.fire('Product Deleted', '', 'info')
          this.ngOnInit()  ;   
        })  
      } else if (result.isDenied) {
        Swal.fire('Delete Cancelled', '', 'info')
      }
    })
    
    
  
  }
}
