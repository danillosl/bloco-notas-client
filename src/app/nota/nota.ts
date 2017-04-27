export class Nota {
    private _id: any;
    titulo: string;
    nota: string;
    primeiraVisualizacao: string;
    numeroVisualizacao: number;
    isPublica: boolean;
    status: string;

    constructor(nota?: any) {
            this._id = nota ? nota._id : {$oid: ""};
            this.titulo = nota ? nota.titulo : "";
            this.nota = nota ? nota.nota : "";
            this.primeiraVisualizacao = nota ? nota.primeira_visualizacao : "";
            this.numeroVisualizacao = nota ? nota.numero_visualizacao : 0;
            this.isPublica = nota ? nota.is_publica : false;
            this.status = nota ? nota.status : "rascunho";
         }

    get id(): number {
        return this._id.$oid;
    }

}