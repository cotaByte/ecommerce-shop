import { Component, Input } from '@angular/core';
import { Product } from '../product/model/product';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.less']
})
export class FeaturedComponent {
  @Input() featured!: Product |undefined;
}
