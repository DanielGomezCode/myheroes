import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  superheroes: any[] = [];
  superheroNames: string[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const observables: Observable<any>[] = [];
    for (let i = 1; i <= 20; i++) {
      observables.push(this.apiService.getSuperheroById(i));
    }

    forkJoin(observables).subscribe(response => {
      this.superheroes = response;
      this.updatePage(1);
    });
  }

  updatePage(page: number) {
    this.currentPage = page;
    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.superheroNames = this.superheroes.slice(start, end).map(hero => hero.name);
    
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.updatePage(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.updatePage(this.currentPage - 1);
    }
  }

  totalPages() {
    return Math.ceil(this.superheroes.length / this.itemsPerPage);
  }
}
