import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipes: object;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getRecipe().subscribe(data => {
      this.recipes = data;
      console.log(this.recipes);
      
    })
  }

  // getRecipe(){
  //   return this.http.get('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3')
  // }

  
  // fetch('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3.')
  // .then(response => response.json())
  // .then(data => console.log(data));
}
