import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { fake } from '../fake';
import { ImagePickerConf } from 'ngp-image-picker';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
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
  r:any;
  g:any;
  b:any;
  a:any;
  colorOption = '#9c27b0'

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
  


  constructor(private service: ProductService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.dropdownList = fake.details.attributes[0].color;
    this.categoryList = fake.details.category;
    this.selectedItems = [
      // { item_id: 3, item_text: 'Pune' },
      // { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,      
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };

    // this.service.getCategory().subscribe((e:any)=>{
    //   console.log(e);
    //   this.categoryList = e['result']

    // })
    // this.service.getSubCategory().subscribe((e:any)=>{
    //   console.log(e);
    //   this.subcategoryList = e['result']

    // })

    this.buildForm();
  }

  buildForm() {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      quantity: [''],
      brand: [''],
      category: [''],
      multicolor: [''],
      colorOption: [],
      subcategory: [''],
      type: [''],
      sizes: [''],
      tag: [''],
      vendor: [130380407],
      price: [''],
      mainPicURL: [''],
      subPicURL: [''],
      attribute: [],
      productAttributes: this.fb.array['']
    });



  }

  get productAttributs() {
    return this.productForm.get('productAttributes') as FormArray
  }


  arrayForm() {
    this.attributeForm = this.fb.group({
      size: [''],
      neckType: [''],
      sleeve: ['']
    })
  }

  getSubCategory(event) {
    console.log(event.target.value);
    this.subcategoryDisabled = false
    this.subcategoryList = fake.details.subCategory;
    this.subcategoryList = this.subcategoryList.filter( e=> e.categoryId === Number( event.target.value) )
    console.log(this.subcategoryList);
  }

  getType(event){
    console.log(event.target.value);
    this.typeDisabled = false
    this.type = fake.details.type
    this.type = this.type.filter( e=> e.subCategoryId === Number( event.target.value) )
    console.log(this.type);
  }

  submit() {
    console.log(this.productForm.value)
    this.service.addproducts(this.productForm.value).subscribe((e: any) => {
      console.log(e);

    })
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

  onImageChange(event){
    console.log(event);    
  }

  getTag(event){
    var search= event.target.value;
     var a = search.split(',')
    this.productForm.get('tag').setValue(a)     
  }

  getSize(event){
    var search= event.target.value;
     var a = search.split(',')
    this.productForm.get('sizes').setValue(a)     
  }
  changeComplete(event){
    console.log(event);
    this.colorOption = event.color.hex
  }

}
