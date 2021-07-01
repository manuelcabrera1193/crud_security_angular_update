import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-eliminar-categoria',
  templateUrl: './eliminar-categoria.component.html',
  styleUrls: ['./eliminar-categoria.component.css']
})
export class EliminarCategoriaComponent implements OnInit {


  id: string = ""
  name: string = ""
  constructor(private rutaActiva: ActivatedRoute, private categoriaService: CategoriaService, private router: Router) {
    this.id = this.rutaActiva.snapshot.params.id
    this.name = this.rutaActiva.snapshot.params.name
  }

  ngOnInit(): void {
  }


  eliminar() {
    this.categoriaService.eliminar(parseInt(this.id)).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("listar-categorias");
    })
  }
  cancel() {
    this.router.navigateByUrl("listar-categorias");
  }

}
