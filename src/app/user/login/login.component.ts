import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentUser: any;
  displayStyle = "none";

  constructor(private ser: Ser1Service) {
    this.ser.getCredentials().subscribe(
      (res: any) => {
        console.log(res);
        this.currentUser = res;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  openPopup() {
    this.clearForm();
    this.displayStyle = "block";
  }

  clearForm() {
    //clear form
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
  }

  closePopup() {
    this.displayStyle = "none";
  }

  signIn() {
    this.openPopup();
  }

  signOut() {
    let a = "";
    this.ser.setCredentials(a);
  }

  login(f: any) {
    f = f.value;
    console.log(f);
    this.ser.getUsers().subscribe(
      (res: any) => {
        console.log(res);
        this.currentUser = res.filter(
          (x: any) => {
            if (x.user == f.username && x.password == f.pass) {
              return x;
            }
          }
        )

        console.log(this.currentUser);
        if (this.currentUser.length > 0) {
          this.ser.setCredentials(this.currentUser);
          alert("Successfull Login.");
          this.closePopup();
        }
        else {
          alert("Invalid Credentials.");
          // this.closePopup();
        }
      },
      (err: any) => {
        console.log(err);
      }
    )


  }


}
