import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Payment} from '../models/payment.model';


@Injectable()
export class PaymentService {
  private paymentUrl = 'http://localhost:9000/api/payments';

  constructor(private http:Http) {
  }

  getPayments() {
    return this.http.get(this.paymentUrl)
      .map(res => <Payment[]> res.json())
      .catch(this.handleError);
  }

  getPayments2() : Observable<Payment[]>{
    return this.http.get(this.paymentUrl)
              .map((res: Response) => {
                let payments = res.json();
                return payments;
              });
  }

  handleError(error:Response) {
    console.error(error);
    return Observable.throw(error.json()._error || 'Server Error');
  }

}
