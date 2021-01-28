import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.scss']
})
export class ReverseComponent implements OnInit {
  reverseWord = ""
  data = ""

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(){
  //   let spanElement = document.querySelector(".rewords")
  //   spanElement.innerHTML = `Hello ${ this.data }`
  //   this.data = ""
  // }

  reverse(){
    // let inputElement = document.querySelector(".inputElement")
    // console.log(inputElement);
    let spanElement = document.querySelector(".rewords")
    spanElement.innerHTML = `Hello ${ this.data.split("").reverse().join("") }`
    this.data = ""

  }

}
