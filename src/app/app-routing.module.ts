import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCategoriaComponent } from './pages/categories/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './pages/categories/eliminar-categoria/eliminar-categoria.component';
import { ListarCategoriasComponent } from './pages/categories/listar-categorias/listar-categorias.component';
import { RegistrarCategoriaComponent } from './pages/categories/registrar-categoria/registrar-categoria.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: 'registrar-categoria', component: RegistrarCategoriaComponent },
  { path: 'listar-categorias', component: ListarCategoriasComponent },
  { path: 'eliminar-categoria/:id/:name', component: EliminarCategoriaComponent },
  { path: 'editar-categoria/:id/:name/:code', component: EditarCategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
