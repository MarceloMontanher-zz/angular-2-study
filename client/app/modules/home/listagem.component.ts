import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ListagemPresenter } from './listagem.presenter';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    fotos: Array<Object> = [];
    listagemPresenter: ListagemPresenter;     

    constructor(http: Http) {

        this.listagemPresenter = new ListagemPresenter(this);
        this.listagemPresenter.requestPhotos(http);

        // http.get('v1/fotos')
        //     .map(res => res.json())
        //     .subscribe(fotos => this.fotos = fotos, erro => console.log(erro));
    }

    showImages(fotos: Array<Object>) {
        this.fotos = fotos;
    }



}