import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent {
  @Input () modal:boolean=true;
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



  guarda(){
    debugger;
    console.log("guarda")
  }
  
  
  limpia(){
    debugger;
    console.log("limpia")
  }
}
