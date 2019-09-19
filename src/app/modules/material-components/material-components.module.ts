import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

const Materialcomponents = [
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatIconModule,
  MatRadioModule
];

@NgModule({
  imports: [ Materialcomponents ],
  exports: [ Materialcomponents ]
})
export class MaterialComponentsModule { }
