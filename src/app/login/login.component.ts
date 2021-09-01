import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup
  //isLoggedIn = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService:UserService,

  ) {

    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
    }

    this.loginUserForm = this.fb.group(formControls)
  }

  get email() { return this.loginUserForm.get('email') }
  get password() { return this.loginUserForm.get('password') }
  
 
  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/people-list']);
    } 
  }
  
  loginUser() {
    //console.log(this.loginUserForm.value);
    let data = this.loginUserForm.value;

    let user = new User(data.nulll,data.nulll,data.email,data.nulll,data.password);

    this.userService.loginAdmin(user).subscribe(
      res=>{
        console.log(res);
        let token = res.token;
        //this.isLoggedIn = true;
        localStorage.setItem("myToken",token);
        this.router.navigate(['/people-list']);
      },
      err=>{
        console.log(err);
       // this.isLoggedIn = false;
      }
    )
    
  }

}
