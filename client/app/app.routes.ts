import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ListagemComponent } from './modules/home/listagem.component';

const appRoutes: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent},
    { path: '**', component: ListagemComponent }
];

export const routing = RouterModule.forRoot(appRoutes);