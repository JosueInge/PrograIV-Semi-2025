const matriculaAlumno = {
    props: ['forms'],
    data() {
        return {
            idAlumno: '',
            nombre: '',
            fechaNacimiento: '',
            numeroMatricula: '',
            fechaMatricula: ''
        };
    },
    methods: {
        guardarMatricula() {
            console.log("Matrícula guardada:", this.idAlumno, this.nombre, this.fechaNacimiento, this.numeroMatricula, this.fechaMatricula);
        }
    },
    template: `
        <div class="row">
            <div class="col-6">
                <form @submit.prevent="guardarMatricula">
                    <div class="card border-dark mb-3">
                        <div class="card-header bg-dark text-white">Matrícula de Alumno</div>
                        <div class="card-body">
                            <div class="row p-1">
                                <div class="col-3 col-md-3">ID Alumno</div>
                                <div class="col-9 col-md-6">
                                    <input v-model="idAlumno" type="text" class="form-control" required>
                                </div>
                            </div>
                            <div class="row p-1">
                                <div class="col-3 col-md-3">Nombre</div>
                                <div class="col-9 col-md-6">
                                    <input v-model="nombre" type="text" class="form-control" required>
                                </div>
                            </div>
                            <div class="row p-1">
                                <div class="col-3 col-md-3">Fecha de Nacimiento</div>
                                <div class="col-9 col-md-6">
                                    <input v-model="fechaNacimiento" type="date" class="form-control" required>
                                </div>
                            </div>
                            <div class="row p-1">
                                <div class="col-3 col-md-3">Número de Matrícula</div>
                                <div class="col-9 col-md-6">
                                    <input v-model="numeroMatricula" type="text" class="form-control" required>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer bg-dark text-center">
                            <button type="submit" class="btn btn-success m-1">Guardar</button>
                            <input type="reset" value="Nuevo" class="btn btn-warning m-1">
                            <input type="button" @click="buscarMatricula" value="Buscar" class="btn btn-info m-1">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `
};
