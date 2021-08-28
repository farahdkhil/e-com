import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

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

    this.loginUserForm = this.fb.group(formControls)
  }

  get email() { return this.loginUserForm.get('email') }
  get password() { return this.loginUserForm.get('password') }

  ngOnInit(): void {
  }
  loginUser() {
    console.log(this.loginUserForm.value);
  }


}
