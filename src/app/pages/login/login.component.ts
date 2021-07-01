import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { TokenServiceService } from 'src/app/services/token-service.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  loginUser: LoginUser | null | undefined = null;
  nameUser: string = "";
  password: string = "";

  addressForm = this.fb.group({
    nameUser: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private tokenService: TokenServiceService,
    private authService: AuthServiceService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.loginUser = new LoginUser(this.nameUser, this.password);
    this.authService.login(this.loginUser).subscribe(
      data => {
        console.log(data);
        this.tokenService.setToken(data.token);
        this.tokenService.setNameUser(data.nameUser);
        this.tokenService.setAuthorities(data.authorities);
        this.router.navigate(['/home']);
        this.showToast('Bienvenido ' + this.tokenService.getNameUser());

      },
      err => {
        this.showToast("Usuario o Constraseña incorrecta");
      }
    );
  }

  showToast(message: string) {
    this._snackBar.open(message, "OK", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
