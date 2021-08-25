import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name = "Everyone";

  bookslist = [];
  myCondition = true;
  constructor() { }

  ngOnInit(): void {
  }
  hello(myname: String) {
    alert('Hello' + myname);
  }

}
