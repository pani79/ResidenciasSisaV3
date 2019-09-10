export class ResidenciasPreinscripcionEncuestaModel {
  constructor(
    public nacionalidad: number,
    public nacimientoFecha: number,
    public nacimientoPais: number,
    public nacimientoProvincia: number,
    public email: string,
    public domicilioProvincia: number,
    public domicilioLocalidad: number,
    public domicilioDomicilio: number,
    public domicilioNro: number,
    public domicilioPiso: number,
    public domicilioDepto: number,
    public domicilioCP: number,
    public domicilioTelATipo: number,
    public domicilioTelANro: number,
    public domicilioTelBTipo: number,
    public domicilioTelBNro: number,
    public domicilioTelCTipo: number,
    public domicilioTelCNro: number,
    public domicilioTelDTipo: number,
    public domicilioTelDNro: number,
    public profesionTitulo: number,
    public profesionTipoMatricula: number,
    public profesionAnoIngreso: number,
    public profesionPromedio: number,
    public profesionTituloEnTramite: boolean

  ) {}
}
