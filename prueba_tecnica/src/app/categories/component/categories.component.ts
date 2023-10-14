import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent {
  @Input () isModal:boolean=false;
  @Output() openModal = new EventEmitter<void>();
  categories: any=[
    {name:'People',id:'1',value:'people'},
    {name:'Premium',id:'2',value:'premium'},
    {name:'Pets',id:'3',value:'pets'},
    {name:'Food',id:'4',value:'food'},
    {name:'Landmarks',id:'5',value:'landmarks'},
    {name:'Cities',id:'6',value:'cities'},
    {name:'Nature',id:'7',value:'nature'},
  ];

}
