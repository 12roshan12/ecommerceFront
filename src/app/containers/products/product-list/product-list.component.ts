import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { fake } from '../fake';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  productList: any;

  constructor( private products: ProductService) { }

  ngOnInit(): void {

    // this.products.getproducts().subscribe((e:any)=>{
    //   console.log(e)
    //   this.productList = e['result']
    // })

    this.productList = fake.products

    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }
}
