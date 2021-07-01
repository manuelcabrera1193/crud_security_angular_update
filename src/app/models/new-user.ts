export class NewUser {
    name: string;
    nameUser: string;
    email: string;
    password: string;
    roles: string[];
    constructor(name: string, nameUser: string, email: string, password: string, roles: string[]) {
        this.name = name;
        this.nameUser = nameUser;
        this.email = email;
        this.password = password;
        this.roles = roles
    }
}
