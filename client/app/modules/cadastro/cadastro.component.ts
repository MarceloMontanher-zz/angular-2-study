import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroViewModel } from './cadastro.viewmodel';
import { CadastroPresenter } from './cadastro.presenter';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    
    meuForm: FormGroup;
    presenter: CadastroPresenter;

    constructor(fb: FormBuilder) {
        this.presenter = new CadastroPresenter();
        this.initForms(fb);
    }

    initForms(fb: FormBuilder) {
        this.meuForm = fb.group({
            titulo: ['', [
                Validators.required, 
                Validators.minLength(4)]],
            url: ['', 
                Validators.required],
            descricao: ['']
        });
    }

    private onSubmit(event) {
        event.preventDefault();
        this.presenter.saveImage(this.getForm());
    }

    public getForm(): CadastroViewModel {
        let form: CadastroViewModel = this.meuForm.value;
        return form;
    }

    //Old code
    // cadastrar(event) {
    //     event.preventDefault();
        
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers} )
    //              .subscribe(() => {
    //                  this.foto = new FotoComponent();
    //                 console.log('Foto salva com sucesso');    
    //             }, erro => console.log(erro));

    // }

}