import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c-commons-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() idLista: number;
  @Output() public salida = new EventEmitter();


  listaPedida: number;

  constructor() { }

  ngOnInit() {
  }

}
