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

  getAppointments() {
    return this.http.get("http://localhost:3000/appointments")
  }

  delAppointments(a: any) {
    return this.http.delete("http://localhost:3000/appointments/" + a);
  }
}
