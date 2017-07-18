/**
* Created by HP on 11/07/2017.
*/
import {Component} from '@angular/core';
import {Login} from '../models/login.model'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {PaymentService} from '../services/payment.service';
import {Payment} from '../models/payment.model';

@Component({
  selector: 'payments',
  templateUrl: '../templates/dashboard.template.html',
  providers: [PaymentService]
})

export class DashboardComponent{
  payments:Payment[] = [];
  errorString:string;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "TenderAmt";
  public sortOrder = "asc";

  constructor(private _paymentService:PaymentService) {
  }

  ngOnInit() {
    this.getPayments();
  }

  getPayments() {
    this._paymentService.getPayments2()
      .subscribe(
        payments =>this.payments = payments,
        error => this.errorString = <any> error
      );
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }

}
