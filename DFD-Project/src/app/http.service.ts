import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getRecipe(){
    return this.http.get('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3')
    
  }
}
