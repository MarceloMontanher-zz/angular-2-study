import { Http } from '@angular/http';

export class ListagemResource {

    listener;

    constructor(listener) {
        this.listener = listener;
    }

    downloadImages(http: Http) {
        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(fotos => this.listener.showImages(fotos), erro => console.log(erro));
    }

}