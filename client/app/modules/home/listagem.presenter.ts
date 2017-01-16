import { BasePresenter } from '../../core/base.presenter';
import { ListagemUseCase} from '../../domain/listagem.use-case'
import { Http } from '@angular/http';

export class ListagemPresenter extends BasePresenter {

    listagemUseCase: ListagemUseCase;
    listener;

    constructor(listener) {
        super();
        this.listagemUseCase = new ListagemUseCase(this);
        this.listener = listener;
    }

    requestPhotos(http: Http) {
        return this.listagemUseCase.downloadImages(http);
    }

    showPhotos(fotos: Array<Object>) {
        this.listener.showImages(fotos);
    }

}