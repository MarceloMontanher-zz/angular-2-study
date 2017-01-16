import { Http, Headers } from '@angular/http';

export class CadastroResource {

    http: Http;

    constructor() {
        //this.http = http;
    }

    cadastrar(foto) {
        console.log("resource!");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        console.log("Imagem adicionada\n" + foto);
        
        // this.http.post('v1/fotos', JSON.stringify(foto), { headers: headers} )
        //         .subscribe(() => {
        //             //foto = new FotoComponent();
        //         }, erro => console.log(erro));

    }

}