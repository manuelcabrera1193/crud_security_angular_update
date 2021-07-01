export class Marca {
    idMarca:number|undefined;
    nameMarca:string = "";
    createdDate:string = "";    
    constructor(nameCategoria:string){
        this.nameMarca = nameCategoria;
        this.createdDate = new Date().toISOString()
    };
}
