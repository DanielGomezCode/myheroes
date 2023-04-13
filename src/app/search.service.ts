import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero, HeroSearchResponse } from 'src/hero.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'https://superheroapi.com/api/227046673251557/search/';
  
  constructor(private http: HttpClient) { }
  

  searchHeroesByName(name: string): Observable<any[]> {
    return this.http
    .get<HeroSearchResponse>(`${this.apiUrl}${name}`)
    .pipe(map(response => response.results));
  }
}
