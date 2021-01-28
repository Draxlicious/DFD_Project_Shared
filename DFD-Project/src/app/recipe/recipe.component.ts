import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // fetch("http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3.").then(r => r.json()).then(j => { console.log(j); });

}
