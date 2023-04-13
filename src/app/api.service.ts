import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getHeroes() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'https://www.superheroapi.com/api/227046673251557/';
  constructor(private http: HttpClient) { }

  getSuperheroById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
