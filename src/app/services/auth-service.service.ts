import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { JwtDTO } from '../models/jwt-dto';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authURL = `${environment.host}/auth`

  constructor(private httpClient: HttpClient) { }

  public new(nuevoUsuario: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + '/new', nuevoUsuario);
  }

  public login(loginUsuario: LoginUser): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + '/login', loginUsuario);
  }
}
