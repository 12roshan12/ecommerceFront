import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { fake } from '../fake';
import { ImagePickerConf } from 'ngp-image-picker';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { environment } from '../../../../environments/environment'
import Swal from 'sweetalert2';




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [DatePipe]
})
export class AddProductComponent implements OnInit {
  categoryList: any;
  subcategoryList: any;
  productForm: FormGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  attributeForm: FormGroup;
  type: any[];
  subcategoryDisabled: boolean = true;
  typeDisabled: boolean = true;
  r: any;
  g: any;
  b: any;
  a: any;
  itemsAsObjects: any;
  subImageList: any = ['', '', ''];
  // colorOption = '#9c27b0'

  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '200px',
    height: '250px',
    hideDownloadBtn: true


  };
  config2: ImagePickerConf = {
    borderRadius: '50%',
    language: 'en',
    width: '100px',
    height: '100px',
    hideDeleteBtn: true,
    hideDownloadBtn: true
  };
  myDate = new Date();
  updateProducts: any;
  mainImage: any = null
  imageList = {
    firstImage: '',
    secondImage: '',
    thirdImage: ''
  }
  I1Image: string;
  I2Image: string;
  I3Image: string;
  isUpdateBoolean: boolean = false;
  paramId:any = null;




  constructor(private service: ProductService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.buildForm();


    

    this.service.getCategory().subscribe((e: any) => {
      this.categoryList = e.result
    })
    this.service.getSubCategory().subscribe((e: any) => {
      this.subcategoryList = e.result
    })
    this.service.getType().subscribe((e: any) => {
      this.type = e.result
    })

    this.route.params.subscribe((e: any) => {
      this.paramId = e.id
    })

    if (this.paramId) {

      this.isUpdateBoolean = true

      this.service.getproductsbyid(this.paramId).subscribe((e: any) => {
        console.log(e);
        const temp: Array<any> = JSON.parse(e.result.colorOption)
        this.updateProducts = e.result
        this.updateProducts.sizeAvailable = JSON.parse(this.updateProducts.sizeAvailable)
        this.updateProducts.tags = JSON.parse(this.updateProducts.tags)
        delete this.updateProducts.colorOption
        this.productForm.patchValue(this.updateProducts)
        this.mainImage = `${environment.ImageApi}` + `${this.productForm.controls.mainImageUrl.value}`
        this.I1Image = `${environment.ImageApi}` + `${this.productForm.controls.I1ImageUrl.value}`
        this.I2Image = `${environment.ImageApi}` + `${this.productForm.controls.I2ImageUrl.value}`
        this.I3Image = `${environment.ImageApi}` + `${this.productForm.controls.I3ImageUrl.value}`

        


        temp.forEach((color) => {
          const colorForm = this.fb.group({
            name: [color.name, Validators.required],
          });
          this.colorOption.push(colorForm);
        })



        console.log(this.updateProducts);
        console.log(this.productForm.value);

      })
    }


  }

  buildForm() {
    this.productForm = this.fb.group({
      vendorId: ['130380407'],
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: [''],
      categoryId: [''],
      subCategoryId: [''],
      typeId: [''],
      brand: [''],
      sizeAvailable: [''],
      mainImageUrl: [''],
      I1ImageUrl: [''],
      I2ImageUrl: [''],
      I3ImageUrl: [''],
      colorOption: new FormArray([]),
      tags: [''],
      createdBy: [''],
      updatedBy: [''],
      createdOn: [this.myDate],
      updatedOn: [this.myDate],
    });
  }

  get colorOption() {
    return this.productForm.controls["colorOption"] as FormArray;
  }


  getSubCategory(event) {
    console.log(event.target.value);
    this.subcategoryDisabled = false
    this.subcategoryList = this.subcategoryList.filter(e => e.category === Number(event.target.value))
    console.log(this.subcategoryList);
  }

  getType(event) {
    console.log(event.target.value);
    this.typeDisabled = false
    this.type = this.type.filter(e => e.subcategory === Number(event.target.value))
    console.log(this.type);
  }

  async submit() {

    if (this.productForm.invalid) {
      Swal.fire('Alert', 'Fill From Correctly', 'warning');
      return
    }
      console.log(this.productForm.value)
     
     if(!this.isUpdateBoolean){
      this.service.addproducts(this.productForm.value).subscribe((e: any) => {
        if(e.result){
          Swal.fire('Success', `${e.result.message}`, 'success');
          console.log(e.result);          
         }
  
         else if(e.error){
           console.log(e.error);
           
         }
     
    });
  }
  else{
    this.service.updateProducts(this.productForm.value,this.paramId).subscribe((e: any) => {
       if(e.result){
        console.log(e.result);
        
       }

       else if(e.error){
         console.log(e.error);
         
       }
  });
  }
  }

  test() {
    console.log(this.productForm.controls.name.value);
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }



  changeComplete(event) {
    console.log(event);

    const colorForm = this.fb.group({
      name: [event.color.hex, Validators.required],
    });
    this.colorOption.push(colorForm);
    console.log(this.productForm.controls.colorOption.value);
  }

  removeColor(index) {
    this.colorOption.removeAt(index)
  }

  onImageChange(e) {
    console.log(e);
    const files = e.target.files[0];
    let formParams = new FormData();
    formParams.append('file', files)
    console.log(formParams);
    this.service.addImages(formParams).subscribe((e: any) => {
      this.productForm.get('mainImageUrl').setValue(e.filename);
      console.log(this.productForm.controls.mainImageUrl.value);
    })
  }

  subImage(e, i) {

    console.log(e);
    const files = e.target.files[0];
    let formParams = new FormData();
    formParams.append('file', files)
    console.log(formParams);
    this.service.addSubImages(formParams,i).subscribe((e: any) => {
      this.productForm.get(`I${i}ImageUrl`).setValue(e.filename);
      console.log(this.productForm.controls.I1ImageUrl.value);
    })
     
  }



}
