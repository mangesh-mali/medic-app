import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ser1Service {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get("http://localhost:3000/dashData");
  }

  getLastAppData() {
    return this.http.get("http://localhost:3000/lastAppoint");
  }

  //Appointments API starts
  getAppointments() {
    return this.http.get("http://localhost:3000/appointments");
  }

  addAppointments(a: any) {
    return this.http.post("http://localhost:3000/appointments", a);
  }

  updateAppointment(a: any) {
    return this.http.put("http://localhost:3000/appointments/" + a.id, a);
  }

  delAppointments(a: any) {
    return this.http.delete("http://localhost:3000/appointments/" + a);
  }
  //Appointments API ends

  //Doctor API starts
  getDoc() {
    return this.http.get("http://localhost:3000/doctors");
  }

  addDoc(a: any) {
    return this.http.post("http://localhost:3000/doctors", a);
  }

  updateDoc(a: any) {
    return this.http.put("http://localhost:3000/doctors/" + a.id, a);
  }

  delDoc(a: any) {
    return this.http.delete("http://localhost:3000/doctors/" + a);
  }
  //Doctor API ends
}
