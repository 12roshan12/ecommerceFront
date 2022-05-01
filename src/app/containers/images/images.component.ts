import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ImagePickerConf } from 'ngp-image-picker';
import { async } from 'rxjs';
import { environment } from '../../../environments/environment'

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  selectedFile: ImageSnippet;
  imageForm:FormGroup
  images: any = [];
  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '200px',
    height: '250px',
    hideDownloadBtn: true

  };

  constructor(private fb:FormBuilder,private imageService: ProductService) { }

   ngOnInit(): void {
    this.imageForm = this.fb.group({
      name:['']
    })

     this.imageService.getImages().subscribe((e:any)=>{
      console.log(e);
      this.images = e.map(element => {
        // return "http://localhost:5001/images/" + `${element.filename}`
        return `${environment.ImageApi}` + `${element.filename}`
      });    
      console.log(this.images);            
      })
      


    }

    

  

  submit(){
    console.log(this.imageForm.value);
    
    // this.imageService.addImages(this.imageForm.value).subscribe((e:any)=>{
    //   console.log(e);
      
    // })
  }

  test(e){
    console.log("triggered");    
    console.log(e);
    // const file: File = e.files[0];
    const reader = new FileReader();
    
    
  }

  test1(e){
    console.log(e);
    const files = e.target.files[0];       
    this.imageService.addImages(files).subscribe((e:any)=>{
      console.log(e);
      
    })
    

  }

    
  
  

}
