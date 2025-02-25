const { createApp, ref } = Vue;

const app = createApp({
    components: {
        alumno,
        materia,
        matriculaAlumno,
        inscripcionMaterias
    },
    data() {
        return {
            forms: {
                alumno: { mostrar: false },
                materia: { mostrar: false },
                docente: { mostrar: false },
                matriculaAlumno: { mostrar: false },
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
