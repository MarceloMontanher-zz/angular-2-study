import { CadastroResource } from '../resources/cadastro.resource';

export class CadastroUseCase {

    cadastroResource: CadastroResource;

    constructor() {
        this.cadastroResource = new CadastroResource();
    }

    execute(params: any) {
        this.cadastroResource.cadastrar(params);
    }
}