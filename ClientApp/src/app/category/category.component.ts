import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getList();
  }

  categoryList:Category[]=[];

  getList()
  {
    this.categoryService.getList()
      .subscribe(res=>{
        res.forEach(element => {
          this.getImage(element);
        });
    });
  }

  getImage(item: Category)
  {
    let category: Category= { categoryID:0, categoryName:'',description:'',picture:[],pictureUrl:'' };
    category.categoryID = item.categoryID;
    category.description = item.description;
    category.categoryName = item.categoryName;
    //console.log(item.picture);
    var arrayBufferView = new Uint8Array( item.picture );
    var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
    //var blob = new Blob( [ category.picture ], { type: "image/jpeg" } );
    var imageUrl = URL.createObjectURL( blob );

    let objectURL = 'data:image/jpeg;base64,' + item.picture;
    var a = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    console.log(a);
    category.pictureUrl = a ;
    //console.log(imageUrl);
    this.categoryList.push(category);
  }
}
