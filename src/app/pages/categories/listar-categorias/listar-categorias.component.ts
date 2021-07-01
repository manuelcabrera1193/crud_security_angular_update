import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Categoria>;
  dataSource: MatTableDataSource<Categoria> = new MatTableDataSource();
  data: Categoria[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['code', 'name', 'edit', 'delete'];

  constructor(private categoriaService: CategoriaService, private router: Router) {

  }
  ngOnInit(): void {
    this.categoriaService.listar().subscribe(d => {
      var list = d.result
      console.log(d)
      console.log(list)
      this.data = list;
      this.dataSource = new MatTableDataSource(list);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }

  goRegister() {
    this.router.navigate(["/registrar-categoria"])
  }

  delete(codigo: string) {
    this.router.navigateByUrl("eliminar-categoria/" + codigo + "/" + name)
  }

  edit(obj: Categoria) {
    this.router.navigate(["/editar-categoria/" + obj.id + "/" + obj.name + "/" + obj.code])
  }

}
