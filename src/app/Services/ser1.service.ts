import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ser1Service {
  private rxjsData: any = new BehaviorSubject('default message');
  private loggedUser: any = new BehaviorSubject('');

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get("http://localhost:3000/users");
  }

  setCredentials(a: any) {
    this.loggedUser.next(a);
  }

  getCredentials() {
    return this.loggedUser;
  }

  setData(a: any) {
    this.rxjsData.next(a);
  }

  retrieveData() {
    return this.rxjsData;
  }

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

  //Department API starts
  getDep() {
    return this.http.get("http://localhost:3000/departments").toPromise();
  }

  addDep(a: any) {
    return this.http.post("http://localhost:3000/departments", a);
  }

  updateDep(a: any) {
    return this.http.put("http://localhost:3000/departments/" + a.id, a);
  }

  delDep(a: any) {
    return this.http.delete("http://localhost:3000/departments/" + a);
  }
  //Department API ends

  //Patients API starts
  getPat() {
    return this.http.get("http://localhost:3000/patients");
  }

  addPat(a: any) {
    return this.http.post("http://localhost:3000/patients", a);
  }

  updatePat(a: any) {
    return this.http.put("http://localhost:3000/patients/" + a.id, a);
  }

  delPat(a: any) {
    return this.http.delete("http://localhost:3000/patients/" + a);
  }
  //Patients API ends

  //Payments API starts
  getPay() {
    return this.http.get("http://localhost:3000/payments");
  }

  addPay(a: any) {
    return this.http.post("http://localhost:3000/payments", a);
  }

  updatePay(a: any) {
    return this.http.put("http://localhost:3000/payments/" + a.id, a);
  }

  delPay(a: any) {
    return this.http.delete("http://localhost:3000/payments/" + a);
  }
  //Payments API ends
}
