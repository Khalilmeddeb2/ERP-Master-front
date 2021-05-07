import { Component, OnInit } from '@angular/core';
import { CategoryEntity } from 'app/models/category-entity.model';
import { CategoryService } from 'app/productService/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: CategoryEntity[];

  constructor(private serviceCategorie: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {

    this.serviceCategorie.getCategories().subscribe(data => {
      this.categories=data;
      console.log("aaaaa",data);
    })
    
  }

  

}
