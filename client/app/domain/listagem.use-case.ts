import { ListagemResource } from '../resources/listagem.resource';
import { Http } from '@angular/http';

export class ListagemUseCase {

    listagemResource: ListagemResource;
    listener;

    constructor(listener) {
        this.listagemResource = new ListagemResource(this);
        this.listener = listener;
    }

    downloadImages(http: Http){
        this.listagemResource.downloadImages(http);
    }

    showImages(fotos: Array<Object>) {
        console.log("Primeiro Show Images");
        this.listener.showPhotos(fotos);
    }

}