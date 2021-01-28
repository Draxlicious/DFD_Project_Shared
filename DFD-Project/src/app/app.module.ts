import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { ReverseComponent } from './reverse/reverse.component';
import { RecipeComponent } from './recipe/recipe.component';
// import { HttpServiceComponent } from './http-service/http-service.component';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzComponent,
    ReverseComponent,
    RecipeComponent,
    // HttpServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
