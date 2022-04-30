import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { fake } from '../fake';
import { ImagePickerConf } from 'ngp-image-picker';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers:[DatePipe]
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
  subImageList: any = [];
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



  constructor(private service: ProductService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.dropdownList = fake.details.attributes[0].color;
    this.categoryList = fake.details.category;
    this.selectedItems = [

    ];
    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };



    this.buildForm();
  }

  buildForm() {
    this.productForm = this.fb.group({
      vendorId: ['130380407'],
      name: [''],
      description: [''],
      quantity: [''],
      price: [''],
      categoryId: [''],
      subCategoryId: [''],
      typeId: [''],
      brand: [''],
      sizeAvailable: [''],
      mainImageUrl: [''],
      subImageUrl: [''],
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
    this.subcategoryList = fake.details.subCategory;
    this.subcategoryList = this.subcategoryList.filter(e => e.categoryId === Number(event.target.value))
    console.log(this.subcategoryList);
  }

  getType(event) {
    console.log(event.target.value);
    this.typeDisabled = false
    this.type = fake.details.type
    this.type = this.type.filter(e => e.subCategoryId === Number(event.target.value))
    console.log(this.type);
  }

  async submit() {

    if (this.productForm.invalid) {
      return
    }

    let temp = this.productForm.get('tags').value
    temp = temp.map(e => {
      return e.name
    })

    this.productForm.get('tags').setValue(temp)
    let temp1 = this.productForm.get('sizeAvailable').value
    temp1 = temp1.map(e => {
      return e.name
    })
    this.productForm.get('sizeAvailable').setValue(temp1)

   this.post(()=>{

      console.log(this.productForm.value)
      this.service.addproducts(this.productForm.value).subscribe((e: any) => {
        console.log(e);
      })
    });

   
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

  subImage(e) {
    console.log(e);
    const files = e.target.files[0];
    console.log(files);
    this.subImageList.push(files)

  }

  async post(callBack?) {

   

      let formParams = new FormData();
      for (let img of this.subImageList) {
        formParams.append('file', img)
      }

      console.log(formParams);

      this.service.addSubImages(formParams).subscribe((e: Array<any>) => {
        let arrayImage = e.map((image: any) => image.filename)

        this.productForm.get('subImageUrl').setValue(arrayImage)
        console.log(this.productForm.controls.subImageUrl.value);
        if (callBack)
          callBack()
    });

    


  }


}
