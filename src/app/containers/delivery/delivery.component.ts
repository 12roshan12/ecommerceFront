import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  dtOptions: DataTables.Settings = {};


  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }


}
