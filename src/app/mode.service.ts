import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/modes';

  constructor(private http: HttpClient) { }

  getModeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
