import { Injectable } from '@angular/core';

const TOKEN_KEY: string = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  roles: Array<string> = [];

  constructor() { }

  public isLogged() {
    var result = false;
    if (this.getToken() == "") {
      result = false;
    } else {
      result = true;
    }
    return result;
  }

  public isAdmin() {
    var result = false;
    this.getAuthorities().forEach(element => {
      if (element == 'ADMIN') {
        result = true;
      }
    });
    return result;
  }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY) || '';
  }

  public setNameUser(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName || '');
  }

  public getNameUser(): string {
    return window.sessionStorage.getItem(USERNAME_KEY) || 'El Bacan';
  }
  public getTitle(): string {
    var title = window.sessionStorage.getItem(USERNAME_KEY);
    if (title == '' || title == null || title == undefined) { return 'El Bacan'; }
    else { return "Bienvenido " + title.toLocaleUpperCase() }

  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (window.sessionStorage.getItem(AUTHORITIES_KEY)) {

      var list = window.sessionStorage.getItem(AUTHORITIES_KEY);
      JSON.parse(list || '[]').forEach((authority: { authority: string; }) => {
        this.roles.push(authority.authority);
      });

    }
    return this.roles;
  }

  public logout(): void {
    window.sessionStorage.clear();
  }
}
