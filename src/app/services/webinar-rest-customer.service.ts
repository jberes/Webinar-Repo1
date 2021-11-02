import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebinarRestCustomerService {
  constructor(private http: HttpClient) { }

  public getCustomersWebinar(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/6ae508dbf8f44571aa8f881fc12674bb`);
  }
}
