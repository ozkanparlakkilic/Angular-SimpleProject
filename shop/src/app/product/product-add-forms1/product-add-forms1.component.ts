import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../category/category';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(private categoryService:CategoryService,private productService:ProductService,private alertifyService:AlertifyService) { }
  model : Product = new Product();

  categories!: Category[];
  
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    });
  }

  add(form:NgForm){
      this.productService.addProduct(this.model).subscribe((data:Product)=>{
      this.alertifyService.success(data.name + " successfully added");
    });
  }
}
