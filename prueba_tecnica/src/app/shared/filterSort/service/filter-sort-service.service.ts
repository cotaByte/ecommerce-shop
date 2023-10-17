import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterSort } from '../model/filter-sort';


@Injectable({
  providedIn: 'root'
})
export class FilterSortServiceService {
private filterSortSubject= new BehaviorSubject<FilterSort>({});
filterSort$= this.filterSortSubject.asObservable();

  constructor() { }

  setFilters(categories: string[]) {
    const currentFilterSort = this.filterSortSubject.value;
    const newFilterSort: FilterSort = { ...currentFilterSort, categories };
    this.filterSortSubject.next(newFilterSort);

    console.log("nuevo filter sort "+ JSON.stringify(newFilterSort));
    
  }

  setSort(sortKey: string, sortType: string) {
    const currentFilterSort = this.filterSortSubject.value;
    const newSort: any = { key: sortKey, type: sortType };
    const newFilterSort: FilterSort = { ...currentFilterSort, sort: newSort };
    this.filterSortSubject.next(newFilterSort);
    console.log("nuevo filter sort "+ JSON.stringify(newFilterSort));
  }

  getFilters(): any {
      return this.filterSortSubject.value.categories || [];
  }

  getSort():any{
    return this.filterSortSubject.value.sort|| {}
  }
}
