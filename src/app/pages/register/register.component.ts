import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { NewUser } from 'src/app/models/new-user';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  toppings = new FormControl();
  listRoles: string[] | undefined

  toppingList: string[] = ['ADMIN', 'USER', 'COOK', 'BOX'];

  newUser: NewUser | undefined;
  name: string = "";
  nameUser: string = "";
  email: string = "";
  password: string = "";

  addressForm = this.fb.group({
    name: [null, Validators.required],
    nameUser: [null, Validators.required],
    email: [null, Validators.required],
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
    this.newUser = new NewUser(this.name, this.nameUser, this.email, this.password, this.toppings.value);
    this.authService.new(this.newUser).subscribe(
      _data => {
        this.router.navigate(['/login']);
      },
      _err => {
        this.showToast("Error al registrar");
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
