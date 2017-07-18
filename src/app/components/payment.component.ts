import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../services/payment.service';
import {CourseService} from '../services/courses.service'
import {Payment} from '../models/payment.model';

@Component({
  selector: 'payments',
  templateUrl: '../templates/login.html',
  providers: [PaymentService]
})
export class AppComponent implements OnInit{
  payments:Payment[] = [];
  errorString:string;

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

}

