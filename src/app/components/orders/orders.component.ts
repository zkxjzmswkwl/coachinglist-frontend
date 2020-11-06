import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.styl']
})

export class OrdersComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.get('orders/').subscribe((r: any) => {
      console.log(r);
    });
  }

}
