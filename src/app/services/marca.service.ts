import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private url: string = `${environment.host}/marcas`

  //Header json
  headers: any = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  };

  //Post options pass it to HttpHeaders Class 
  httpOptions = {
    headers: new HttpHeaders(this.headers),
  };

  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Marca[]>(this.url);
  }

  registrar(marca: Marca): Observable<any> {
    return this.http.post<Marca>(this.url, JSON.stringify(marca), this.httpOptions)
  }

  eliminar(id:number){
    return this.http.delete<Marca>(this.url.concat("/").concat(id.toString()), this.httpOptions)
  }

  editar(marca: Marca): Observable<any> {
    return this.http.put<Marca>(this.url, JSON.stringify(marca), this.httpOptions)
  }
}
