export class Nota {
    private _id: any;
    titulo: string;
    nota: string;
    private _primeiraVisualizacao: string;
    numeroVisualizacao: number;
    isPublica: boolean;
    status: string;

    constructor(nota?: any) {
        this._id = nota ? nota._id : { $oid: "" };
        this.titulo = nota ? nota.titulo : "";
        this.nota = nota ? nota.nota : "";
        this._primeiraVisualizacao = nota ? nota.primeira_visualizacao : "";
        this.numeroVisualizacao = nota ? nota.numero_visualizacao : 0;
        this.isPublica = nota ? nota.is_publica : true;
        this.status = nota ? nota.status : "rascunho";
    }

    get id(): number {
        return this._id.$oid;
    }
    get primeiraVisualizacao(): string {
        let data = new Date(this._primeiraVisualizacao)
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
    }

    getMapped(): any {
        return {
            is_publica: this.isPublica,
            nota: this.nota,
            numero_visualizacao: this.numeroVisualizacao,
            primeira_visualizacao: this._primeiraVisualizacao,
            status: this.status,
            titulo: this.titulo
        }
    }

    validar(): string[] {
        let erros = [];
        if (this.titulo === "") erros.push("Titulo não pode ser vasio");
        if (this.nota === "") erros.push("A nota não pode ser vasia");
        return erros;
    }

}