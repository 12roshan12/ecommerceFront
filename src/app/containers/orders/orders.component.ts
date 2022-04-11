import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};


  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }

}
