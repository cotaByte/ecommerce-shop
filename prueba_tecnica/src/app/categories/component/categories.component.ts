import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterSortServiceService } from 'src/app/shared/filterSort/service/filter-sort-service.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent {
  @Input () modal:boolean=true;
  @Output() openModal = new EventEmitter<void>();
  categories: any=[]



  constructor(private filterSortService: FilterSortServiceService){
    this.categories=[
      {name:'People',id:'1',value:'people',checked:false},
      {name:'Premium',id:'2',value:'premium',checked:false},
      {name:'Pets',id:'3',value:'pets',checked:false},
      {name:'Food',id:'4',value:'food',checked:false},
      {name:'Landmarks',id:'5',value:'landmarks',checked:false},
      {name:'Cities',id:'6',value:'cities',checked:false},
      {name:'Nature',id:'7',value:'nature',checked:false},
    ];
  }

  ngOnInit(){
    this.filterSortService.filterSort$.subscribe((filterSort) => {
      this.categories = this.categories.map((category: any) => ({
        ...category,
        checked: filterSort.categories ?
          filterSort.categories.includes(category.value) : category.checked
      }));
    });
  }

  setCategories(){
    const selectedCateogries= this.categories
    .filter((category: any) => category.checked)
    .map((category: any) => category.value);

    this.filterSortService.setFilters(selectedCateogries);
  }

  clear() {
    this.categories = this.categories.map((category: any)=> ({...category, checked: false}));
    this.setCategories();
  }
}
