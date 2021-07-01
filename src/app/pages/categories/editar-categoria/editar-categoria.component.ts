import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {
  cat: Categoria = new Categoria("", "");

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  id: number | undefined;
  name: string = "";
  code: string = "";
  addressForm = this.fb.group({
    name: [null, Validators.required],
    code: [null, Validators.required],
  });

  constructor(private rutaActiva: ActivatedRoute,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private categoriaService: CategoriaService,
    private router: Router) {
    this.id = this.rutaActiva.snapshot.params.id
    this.name = this.rutaActiva.snapshot.params.name
    this.code = this.rutaActiva.snapshot.params.code
  }

  onSubmit(): void {
    this.cat.id = this.id;
    this.cat.name = this.name;
    this.cat.code = this.code;
    console.log(this.cat)
    this.categoriaService.editar(this.cat).subscribe(result => {
      var data = result.result
      console.log(result)
      console.log(data)
      if (data.id == this.cat.id) {
        this.router.navigate(["/listar-categorias"]);
      } else {
        this.showToast("Ocurrio un error");
      }
    }, err => {
      console.log(err)
      this.showToast("Ocurrio un error" + err.message);

    })
  }

  cancel() {
    this.router.navigate(["/listar-categorias"]);
  }


  showToast(message: string) {
    this._snackBar.open(message, "OK", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
