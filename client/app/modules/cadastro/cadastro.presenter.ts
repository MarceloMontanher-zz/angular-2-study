import { CadastroViewModel } from './cadastro.viewmodel';
import { CadastroUseCase } from '../../domain/cadastro.use-case';
import { BasePresenter } from '../../core/base.presenter';

export class CadastroPresenter extends BasePresenter{

    cadastroUseCase: CadastroUseCase;

    constructor() {
        super();
        this.cadastroUseCase = new CadastroUseCase();
    }

    saveImage(image: CadastroViewModel) {
        this.cadastroUseCase.execute(image);
        
    }
    
}