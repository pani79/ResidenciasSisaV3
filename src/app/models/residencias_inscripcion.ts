export class ResidenciasInscripcionModel {
    constructor(
        public a_concursaId: number,
        public a_concursaTipo: boolean,
        public a_concursaProvincia: number,
        public a_concursaInstitucion: number,
        public a_concursaEspecialidad: number,

        public b_concursotipo: number,
        public b_concursosubtipo: number,

        public c_concurso: number,

        public d_razoneseleccion: number[],
        public d_dondeseencontrara: number,
        public d_ambitodesarrollo: number,

        public e_nombre: string,
        public e_apellido: string,
        public e_numerodocumento: number,
        public e_sexo: number,
        public e_estadocivil: number,
        public e_hijos: number,
    
        public e_nacionalidad: number,
        public e_nacimientoFecha: number,
        public e_nacimientoPais: number,
        public e_nacimientoProvincia: number,
        public e_email: string,
        public e_domicilioProvincia: number,
        public e_domicilioLocalidad: number,
        public e_domicilioDomicilio: number,
        public e_domicilioNro: number,
        public e_domicilioPiso: number,
        public e_domicilioDepto: number,
        public e_domicilioCP: number,
        public e_domicilioTelATipo: number,
        public e_domicilioTelANro: number,
        public e_domicilioTelBTipo: number,
        public e_domicilioTelBNro: number,
        public e_domicilioTelCTipo: number,
        public e_domicilioTelCNro: number,
        public e_domicilioTelDTipo: number,
        public e_domicilioTelDNro: number,
        public e_profesionTitulo: number,
        public e_profesionTipoMatricula: number,
        public e_profesionAnoIngreso: number,
        public e_profesionPromedio: number,
        public e_profesionTituloEnTramite: boolean

    ) {}
}
