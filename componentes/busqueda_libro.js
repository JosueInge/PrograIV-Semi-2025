    
 const buscarlibro = {
    data() {
        return {
            buscar: '',
            buscarTipo: 'titulo',
            libros: [],
        }
    },
    methods: {
        modificarLibro(libro){
            this.$emit('modificar', libro);
        },
        eliminarLibro(libro) {
            alertify.confirm('Eliminar Libro', `¿Esta seguro de eliminar el materia ${libro.nombre}?`, () => {
                db.libros.delete(libro.idLibro);
                this.listarLibros();
                alertify.success(`libro ${libro.nombre} eliminado`);
            }, () => { });
        },
        async listarLibros() {
            this.libros = await db.libros.filter(libro => libro[this.buscarTipo].toLowerCase().includes(this.buscar.toLowerCase())).toArray();
        },
        nuevoLibro() {
            this.accion = 'nuevo';
            this.idLibro = '';
            this.idAutor = '';
            this.lsbn = '';
            this.titulo = '';
            this.editorial = '';
            this.edicion = '';
        }
    },
    created() {
        this.listarLibros();
    },
    template: `
        <div class="row">
            <div class="col-6">
                <table class="table table-sm table-bordered table-hover text-center">
                    <thead>
                        <tr>
                            <th>BUSCAR POR</th>
                            <th>
                                <select v-model="buscarTipo" class="form-control">
                                    <option value="idAutor">ID AUTOR</option>
                                    <option value="lsbn">LSBN</option>
                                    <option value="titulo">TITULO</option>
                                    <option value="editorial">EDITORIAL</option>
                                    <option value="edicion">EDICION</option>
                                </select>
                            </th>
                            <th colspan="4">
                                <input type="text" @keyup="listarLibros()" v-model="buscar" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>ID AUTOR</th>
                            <th>LSBN</th>
                            <th>TITULO</th>
                            <th>EDITORIAL</th>
                            <th>EDICION</th>  
                            <th>ELIMINAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="libro in libros" @click="modificarLibro(libro)" :key="libro.idLibro">
                            <td>{{ libro.idAutor }}</td>
                            <td>{{ libro.lsbn }}</td>
                            <td>{{ libro.titulo }}</td>
                            <td>{{ libro.editorial }}</td>
                            <td>{{ libro.edicion }}</td>
                            <td>
                                <button class="btn btn-danger btn-sm" 
                                    @click.stop="eliminarLibro(libro)">DEL</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
};