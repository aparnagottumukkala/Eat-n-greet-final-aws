import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../models/user-login';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService, private fb: FormBuilder, private router: Router
  ) { }
  public Credentials: FormControl;
  registrationform = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  userLoginObj = new UserLogin();

  ngOnInit() {
    sessionStorage.setItem('token', '');
}
get email() {
  return this.registrationform.get('email');
}

get password() {
  return this.registrationform.get('password');
}
  login() {
    this.userService.login(this.userLoginObj).subscribe((response) => {
      // if(response.success){
      //   this.showSucessToast(response.message);
      // } else {
      //   this.showErrorToast(response.message);
      // }
      console.log('Received response', response);
      sessionStorage.setItem('token', btoa(this.userLoginObj.username + ':' + this.userLoginObj.password));
      }
    );
    console.log(this.userLoginObj.username + '' + this.userLoginObj.password);
  }
/*testlogin() {
  this.router.navigate(['home']);
}*/
onSubmit() {
  if (this.registrationform.valid) {
    this.router.navigate(['home']);
  } else {
    console.log('form is not valid');
  }
 }
}

