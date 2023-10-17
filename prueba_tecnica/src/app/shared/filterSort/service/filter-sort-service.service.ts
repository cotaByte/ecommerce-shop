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
  
    if (categories.length) {
      const newFilterSort: FilterSort = { ...currentFilterSort, categories };
      this.filterSortSubject.next(newFilterSort);
    } else {
      const { categories: oldCategories, ...rest } = currentFilterSort;
      this.filterSortSubject.next(rest);
    }
  }

  setSort(sortKey: string, sortType: string) {
    const currentFilterSort = this.filterSortSubject.value;

    if (sortKey) {
      const newSort: any = { key: sortKey, type: sortType };
      const newFilterSort: FilterSort = { ...currentFilterSort, sort: newSort };
      this.filterSortSubject.next(newFilterSort);
    } else {
      const { sort, ...rest } = currentFilterSort;
      this.filterSortSubject.next(rest);
    }
  }

  getFilters(): any {
      return this.filterSortSubject.value.categories || [];
  }

  getSort():any{
    return this.filterSortSubject.value.sort || {}
  }

  getFilterSort():any{
    return this.filterSortSubject.value;
  }
}
