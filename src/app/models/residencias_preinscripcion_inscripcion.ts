export class ResidenciasPreinscripcionInscripcionModel {
    constructor(
        public concursoId: number,
        public concursoProvinciaInstitucion: boolean,
        public concursoProvincia: number,
        public concursoInstitucion: number,
        public concursoEspecialidad: number,

        public concursoTipo: number,
        public concursoSubtipo: number

        //public c_concurso: number
    ) {}
}
