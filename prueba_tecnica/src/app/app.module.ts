import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FeaturedComponent } from './featured/featured.component';
import { ProductComponent } from './product/component/product.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
