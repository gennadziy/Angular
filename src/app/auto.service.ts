import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/autos';

  constructor(private http: HttpClient) { }

  getAuto(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
