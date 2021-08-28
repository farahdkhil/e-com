/* name="Everyone";
imageUrl="assets/images/formalab.jfif";
bookslist=['some book'];
myCondition=true;  */
/* name="Everyone";
imageUrl="assets/images/formalab.jfif";
bookslist=['some book'];
myCondition=true;  */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myForm: FormGroup
  //userslist = [];
  constructor(private fb: FormBuilder, private userService: UserService) {

    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ])
    }

    this.myForm = this.fb.group(formControls);

  }

  get firstname() {
    return this.myForm.get('firstname');
  }

  ngOnInit(): void {
    /* this.userService.getAllUsers().subscribe(
      result => {
        this.userslist = result;
      },
      error => {
        console.log(error);
      }
    ) */

  }

  saveUser() {
    console.log(this.myForm.value);
  }


}
