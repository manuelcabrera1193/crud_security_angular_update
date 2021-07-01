export class JwtDTO {
    token: string;
    type: string;
    nameUser: string;
    authorities: string[];
    constructor(token: string, type: string, nameUser: string, authorities: string[]) {
        this.token = token;
        this.type = type;
        this.nameUser = nameUser;
        this.authorities = authorities;
    }
}
