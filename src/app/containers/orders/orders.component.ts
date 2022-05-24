import { Component, OnInit } from '@angular/core';
import { Orderservice } from 'src/app/services/order.service'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};


  constructor(
    private orderService: Orderservice,
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
    
    this.orderService.getOrdersbyVendor(130380407).subscribe((e:any)=>{
      console.log(e);
    })

  }

}
