import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { Orderservice } from 'src/app/services/order.service'
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment'

import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrdersComponent implements OnInit {
  columns = [{ prop: 'id' }, { name: 'productName' }, { name: 'quantity' }, { name: 'mainImageUrl' },{ name:'status'}];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any[] = [];
  selected = [];
  SelectionType = SelectionType;
  temp = [];
  ColumnMode = ColumnMode;
  orderList: any
  OrderData: any
  productList: any
  expanded: any = {};
  timeout: any;




  constructor(
    private orderService: Orderservice,
    private productservice: ProductService,
  ) { }

  ngOnInit() {

    this.orderService.getOrdersbyVendor(130380407).subscribe((e: any) => {
      this.orderList = e.data
      this.orderList.forEach((element, i) => {
        console.log(this.orderList);
        this.productservice.getproductsbyid(element.productId).subscribe((e: any) => {
          console.log(e.result);
          element['productName'] = e.result['name']
          element['mainImageUrl'] = `${environment.ImageApi}` +  `${e.result['mainImageUrl']}` 
          this.rows = this.orderList
        })
      })
    })
  }

  test(){
    console.log(this.orderList);
    
  }

  updateFilter(e){
    // const val = e.target.value.toLowerCase();
    // const temp = this.temp.filter(function (d) {
    //   return d.id.toLowerCase().indexOf(val) !== -1 || !val;
    // });
    // this.rows = temp;
    // this.table.offset = 0;
    
  }
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  changeStatus(id){
    
  }
  


}
