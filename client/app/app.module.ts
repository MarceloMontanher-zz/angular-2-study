import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ListagemModule } from './modules/home/listagem.module';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/map'

@NgModule({
    imports: [  BrowserModule, 
                HttpModule, 
                routing,
                FormsModule,
                ListagemModule,
                ReactiveFormsModule ],
    declarations: [ AppComponent, CadastroComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }