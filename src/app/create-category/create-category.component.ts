import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryEntity } from 'app/models/category-entity.model';
import { CategoryService } from 'app/productService/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: CategoryEntity= new CategoryEntity();

  constructor(private serviceCategory: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  saveCategory()
  {
    this.serviceCategory.addCategory(this.category).subscribe( data =>{
      console.log(data);
      this.goToCategoryList();
    },
    error => console.log(error));
    
  }


  goToCategoryList()
  {
    this.router.navigate(['/Category'])
  }

  onSubmit(){
    this.saveCategory();
  }

}
