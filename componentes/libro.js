    
 const libro = {
    props: ['forms'],
    data() {
        return {
            accion: 'nuevo',
            idLibro: '',
            idAutor: '',
            lsbn: '',
            titulo: '',
            editorial: '',
            edicion: ''
        }
    },
    methods: {
        buscarlibro() {
            this.forms.buscarlibro.mostrar = !this.forms.buscarlibro.mostrar;
            this.$emit('buscar');
        },
        modificarLibro(libro) {
            this.accion = 'modificar';
            this.idLibro = libro.idLibro;
            this.idAutor = libro.idAutor;
            this.lsbn = libro.lsbn;
            this.titulo = libro.titulo;
            this.editorial = libro.editorial;
            this.edicion = libro.edicion;
        },
        guardarLibro() {
            let libro = {
                idAutor: this.idAutor,
                lsbn: this.lsbn,
                titulo: this.titulo,
                editorial: this.editorial,
                edicion: this.edicion
            };
            if (this.accion == 'modificar') {
                libro.idLibro = this.idLibro;
            }
            db.libros.put(libro);
            this.nuevoLibro();
        },
        nuevoLibro() {
            this.accion = 'nuevo';
            this.idLibro = '';
            this.idAutor = '';
            this.lsbn= '';
            this.titulo = '';
            this.editorial = '';
            this.edicion = '';
        }
    },
    template: `
        <div class="row">
            <div class="col-6">
                <form id="frmLibro" name="frmLibro" @submit.prevent="guardarLibro">
                    <div class="card border-dark mb-3">
                        <div class="card-header bg-dark text-white">Registro de Libros</div>
                        <div class="card-body">
                            <div class="row p-1">
                                <div class="col-3 col-md-2">ID AUTOR</div>
                                <div class="col-9 col-md-6">
                                    <input required v-model="idAutor" type="text" name="txtidAutor" id="txtidAutor" class="form-control">
                                </div>
                            </div>
                            <div class="row p-1">
                                <div class="col-3 col-md-2">LSBN</div>
                                <div class="col-9 col-md-8">
                                    <input required v-model="lsbn" type="text" name="txtlsbn" id="txtlsbn" class="form-control">
                                </div>
                            </div>
                            <div class="row p-1">
                                <div class="col-3 col-md-2">TITULO</div>
                                <div class="col-9 col-md-4">
                                    <input v-model="titulo" type="text" name="txttitulo" id="txttitulo" class="form-control">
                                </div>
                            </div>
                            <div class="row p-1">
                                <div class="col-3 col-md-2">EDITORIAL</div>
                                <div class="col-9 col-md-6">
                                    <input v-model="editorial" type="text" name="txteditorial" id="txteditorial" class="form-control">
                                </div>
                            </div>
                            <div class="row p-1">
                                <div class="col-3 col-md-2">EDICION</div>
                                <div class="col-9 col-md-6">
                                    <input v-model="edicion" type="text" name="txtedicion" id="txtedicion" class="form-control">
                            </div>
                            </div>
                        <div class="card-footer bg-dark text-center">
                            <input type="submit" value="Guardar" class="btn btn-primary m-1"> 
                            <input type="reset" value="Nuevo" class="btn btn-warning m-1">
                            <input type="button" @click="buscarlibro" value="Buscar" class="btn btn-info m-1">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `
};