import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  [x: string]: any;
  private url: string = `${environment.host}/category`

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
    return this.http.get<Message>(this.url);
  }

  registrar(categoria: Categoria): Observable<any> {
    return this.http.post<Message>(this.url, JSON.stringify(categoria), this.httpOptions)
  }

  eliminar(id:number){
    return this.http.delete<Message>(this.url.concat("/").concat(id.toString()), this.httpOptions)
  }

  editar(categoria: Categoria): Observable<Message> {
    return this.http.put<Message>(this.url, JSON.stringify(categoria), this.httpOptions)
  }

}
