import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.scss']
})
export class FizzbuzzComponent implements OnInit {
  
  // @ViewChild('myname') input; 
  // @ViewChild('fizzbuzz') button; 
  // count = 0;
  constructor() { }

  ngOnInit(): void {
    
  }
  
    // ngAfterViewInit() {
  //   console.log(this.input.nativeElement.value = "hi") ;
  //   console.log(this.button.nativeElement);
  // }

  countClick(){
    // console.log("funck")
    // this.count++
    // let ul = document.querySelector("button")
    // console.log(ul);
    


    for(let i = 0; i < 101; i++){
      if(i % 15 == 0){
          console.log("fizzbuzz");
      }
      else if(i % 3 == 0){
        console.log("fizz")   
      }
      else if(i % 5 == 0){
        console.log("buzz")   
      }else{
          console.log(i);
      }
    }
    
  }



}
