import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/component/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/component/categories.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
