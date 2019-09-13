import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//  Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

//  Componentes
import { SisaComponent } from './components/sisa/sisa.component';
import { ResidenciasComponent } from './components/residencias/residencias.component';
import { HeaderComponent } from './components/interface/header/header.component';
import { FooterComponent } from './components/interface/footer/footer.component';
import { InscripcionComponent } from './components/residencias/inscripcion/inscripcion.component';
import { ConsultasComponent } from './components/residencias/consultas/consultas.component';
import { PaginaBaseComponent } from './components/commons/pagina-base/pagina-base.component';
import { BotonCtextoeiconoComponent } from './components/commons/boton-ctextoeicono/boton-ctextoeicono.component';
import { ListaComponent } from './components/commons/lista/lista.component';
import { ContenidoComponent } from './components/commons/lista/contenido/contenido.component';
import { PanelPasosComponent } from './components/commons/panel-pasos/panel-pasos.component';

@NgModule({
  declarations: [
    AppComponent,
    SisaComponent,
    ResidenciasComponent,
    HeaderComponent,
    FooterComponent,
    InscripcionComponent,
    ConsultasComponent,
    PaginaBaseComponent,
    BotonCtextoeiconoComponent,
    ListaComponent,
    ContenidoComponent,
    PanelPasosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  exports: [MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
