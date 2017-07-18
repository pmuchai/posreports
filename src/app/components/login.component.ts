/**
 * Created by HP on 11/07/2017.
 */
import {Component} from '@angular/core';
import {Login} from '../models/login.model'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: '../templates/login.html',
  styleUrls: ['../templates/login.css']
})

export class LoginComponent{
  constructor(private router : Router){};
  data = new Login();
  authenticate(){
    console.log(this.data);
    this.router.navigate(['dashboard']);
  }
}
