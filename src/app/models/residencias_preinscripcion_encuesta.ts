export class ResidenciasPreinscripcionEncuestaModel {
  constructor(
    public residenteId: number,
    public razoneseleccion: number[],
    public dondeseencontrara: number,
    public ambitodesarrollo: number

  ) {}
}
