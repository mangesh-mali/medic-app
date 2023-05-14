import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashSerService {

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get("http://localhost:3000/dashData");
  }

  getLastAppData() {
    return this.http.get("http://localhost:3000/lastAppoint");
  }
}
