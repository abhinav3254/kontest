import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KontestServicesService {

  constructor(private http: HttpClient) { }

  public getKontest(): Observable<any> {
    const url = 'https://kontests.net/api/v1/all';
    return this.http.get<any>(url);
  }
}
