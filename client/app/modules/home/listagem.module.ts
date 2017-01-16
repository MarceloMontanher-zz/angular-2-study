import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPorTitulo } from './foto.pipe';
import { ListagemComponent } from './listagem.component';

@NgModule ({
    declarations: [ 
        FiltroPorTitulo, 
        ListagemComponent 
    ],
    imports: [ 
        CommonModule
    ]
})
export class ListagemModule {}