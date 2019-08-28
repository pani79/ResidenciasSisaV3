import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscripcionComponent } from 'src/app/components/residencias/inscripcion/inscripcion.component';
import { ConsultasComponent } from 'src/app/components/residencias/consultas/consultas.component';
import { ResidenciasComponent } from 'src/app/components/residencias/residencias.component';


const routes: Routes = [
  { path: '', component: ResidenciasComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: '**', component: ResidenciasComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
