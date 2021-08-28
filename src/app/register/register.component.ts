import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute,  } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addUserForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {

    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(10)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
    }

    this.addUserForm = this.fb.group(formControls)
  }

  get email() { return this.addUserForm.get('email') }
  get password() { return this.addUserForm.get('password') }

  ngOnInit(): void {
  }
  saveUser() {
    console.log(this.addUserForm.value);
  }

}
