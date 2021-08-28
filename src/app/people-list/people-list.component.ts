import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList = [
    {
      id: 1,
      name: "Farah",
      username: "Dkhil",
      phone: "12 34 56 78"
    },
    {
      id: 2,
      name: "Hamdi",
      username: "Zidan",
      phone: "12 34 56 78"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  delete(person: any) {
    let index = this.peopleList.indexOf(person);
    this.peopleList.splice(index, 1);

  }
}




