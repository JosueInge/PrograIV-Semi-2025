const { createApp, ref } = Vue;

const app = createApp({
    components: {
        alumno,
        buscaralumno,
        materia,
        matriculaAlumno,
        inscripcionMaterias,
        buscarmateria
    },
    data() {
        return {
            forms: {
                alumno: { mostrar: false },
                buscarAlumno: {mostrar: false},
                materia: { mostrar: false },
                docente: { mostrar: false },
                matriculaAlumno: { mostrar: false },
                buscarMateria: {mostrar: false},
                inscripcionMaterias: { mostrar: false }
            }
        };
    },
    methods: {
        cerrarFormularios() {
            Object.keys(this.forms).forEach(key => {
                this.forms[key].mostrar = false;
            });
        },
        abrirFormulario(componente) {
            this.cerrarFormularios();
            this.forms[componente].mostrar = true;
        }
    }
});

app.mount('#app');
