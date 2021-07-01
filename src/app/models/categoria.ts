export class Categoria {
    id: number | undefined;
    name: string = "";
    code: string = "";
    constructor(name: string, code: string) {
        this.name = name;
        this.code = code;
    };
}
