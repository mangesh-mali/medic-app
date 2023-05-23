import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentCompComponent } from '../payments/payment-comp/payment-comp.component';
import { AppComponent } from '../app.component';
import { Ser1Service } from '../Services/ser1.service';

@Injectable({
  providedIn: 'root'
})
export class Gaurd1Guard implements CanActivate {
  currentUser: any = [{ "user": "", "password": "" }];

  constructor(private ser: Ser1Service, private router: Router) {
    console.log("gaurd constructor");
    this.ser.getCredentials().subscribe(
      (res: any) => {
        if (res.length > 0) {
          console.log(res);
          this.currentUser = res;
        }
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.ser.getCredentials().subscribe(
      (res: any) => {
        console.log(res);
        if (res.length > 0) {
          this.currentUser = res;
        } else {
          this.currentUser = [{ "user": "", "password": "" }];
        }
      },
      (err: any) => {
        console.log(err);
      }
    )

    console.log(this.currentUser);

    if (this.currentUser[0].user == 'admin' && this.currentUser[0].password == '123') {
      alert("Access Granted");
      return true;
    } else {
      alert("Access Denied");
      console.log(this.currentUser);
      if (this.currentUser[0].user == '') {
        alert("Login First");
        this.router.navigateByUrl('signIn');
        return false;
      }
      console.log(this.currentUser);
      if (this.currentUser[0].user.length > 0) {
        alert("Sorry " + this.currentUser[0].user + ", You need Admin Access to navigate to Payments Page");
        return false;
      }
      return false;
    }


    // // bypass
    // return true;

  }

  test() {

  }



}
