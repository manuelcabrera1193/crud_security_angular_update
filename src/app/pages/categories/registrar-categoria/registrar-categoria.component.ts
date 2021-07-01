import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.component.html',
  styleUrls: ['./registrar-categoria.component.css']
})
export class RegistrarCategoriaComponent {
  name: string = ""
  code: string = ""
  addressForm = this.fb.group({
    name: [null, Validators.required],
    code: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private categoriaService: CategoriaService, private router: Router) { }


  onSubmit(): void {
    this.name = this.name
    console.log(new Categoria(this.name, this.code))
    this.categoriaService.registrar(new Categoria(this.name, this.code)).subscribe(data => {
      console.log(data)
      this.router.navigateByUrl("listar-categorias");
    }, err => {
      console.log(err)
    }
    
    )
  }
  cancel() {
    this.router.navigateByUrl("listar-categorias");
  }
}
