import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../../services/product.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  categoryList: any;
  subcategoryList: any;
  productForm: any;
  constructor(private service:ProductService,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.service.getCategory().subscribe((e:any)=>{
      console.log(e);
      this.categoryList = e['result']
      
    })
    this.service.getSubCategory().subscribe((e:any)=>{
      console.log(e);
      this.subcategoryList = e['result']
      
    })

    this.buildForm();
  }

    buildForm(){
    this.productForm = this.fb.group({
    name: [''],
    description: [''],
    quantity: [''],
    brand: [''],
    category: [''],
    multicolor: [''],
    colorOption: [''],
    subcategory: [''],
    tag: [''],
    vendor: [130380407],
    price: [''],
    numberOfPics: [''],
  });

}

  

  submit() {
    console.log(this.productForm.value)
    this.service.addproducts(this.productForm).subscribe((e:any)=>{
      console.log(e);
      
    })
  }

  test(){
    console.log(this.productForm.controls.name.value);
    
  }
}
