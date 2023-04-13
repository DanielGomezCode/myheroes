import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit{
  heroes: any[] = [];
  filteredHeroes: any[] = [];
  searchTerm: string = '';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.loadHeroes();
  }

  loadHeroes() {
    this.searchService.searchHeroesByName('superman').subscribe(response => {
      this.heroes = [response[1]]; // toma solo el segundo elemento
      this.filteredHeroes = this.heroes;
    });
  }

  searchHeroes() {
    this.searchService.searchHeroesByName(this.searchTerm).subscribe(response => {
      this.filteredHeroes = response;
    });
  }
}
