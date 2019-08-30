import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SisaComponent } from './components/sisa/sisa.component';
import { ResidenciasComponent } from './components/residencias/residencias.component';
import { HeaderComponent } from './components/interface/header/header.component';
import { FooterComponent } from './components/interface/footer/footer.component';
import { InscripcionComponent } from './components/residencias/inscripcion/inscripcion.component';
import { ConsultasComponent } from './components/residencias/consultas/consultas.component';
import { PaginaBaseComponent } from './components/commons/pagina-base/pagina-base.component';
import { BotonCtextoeiconoComponent } from './components/commons/boton-ctextoeicono/boton-ctextoeicono.component';

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
    BotonCtextoeiconoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
