import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { fake } from '../fake';
import { environment } from '../../../../environments/environment'
import { Route, Router } from '@angular/router';



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
      this.productList = e['result']
      console.log(this.productList);
      this.imageSrc = this.productList.map((e) =>{
        return `${environment.ImageApi}` + `${e.mainImageUrl}`
      })
      console.log(this.imageSrc);
    })

    // this.productList = fake.products

    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }

  update(event) {
    console.log(event);   
    this.router.navigate(['/products/product-add/' , event ])

  }
}
