const { createApp } = Vue;

createApp({
    data() {
        return {
            alumnos: [],
            codigo: '',
            nombre: '',
            direccion: '',
            departamento: '',
            municipio: '',
            distrito: '',
            telefono: '',
            fechaNacimiento: '',
            sexo: '',
            searchQuery: '',
            
            datos: {
                "Ahuachapán": {
                    "Ahuachapán Norte": ["Distrito de Atiquizaya","Distrito de El Refugio","Distrito de San Lorenzo","Distrito de Turín"],
                    "Ahuachapán Centro": ["Distrito de Ahuachapán","Distrito de Apaneca","Distrito de Concepción de Ataco","Distrito de Tacuba"],
                    "Ahuachapán Sur": ["Distrito de Guaymango"]
                },
                "Cabañas": {
                    "Cabañas Oeste": ["Distrito de Ilobasco"],
                    "Cabañas Este": ["Distrito de Sensuntepeque"]
                },
                "Chalatenango": {
                    "Chalatenango Norte": ["Distrito de La Palma"],
                    "Chalatenango Centro": ["Distrito de Chalatenango"],
                    "Chalatenango Sur": ["Distrito de Arcatao"]
                },
                "Cuscatlán": {
                    "Cuscatlán Norte": ["Distrito de Cojutepeque"],
                    "Cuscatlán Sur": ["Distrito de Candelaria"]
                },
                "La Libertad": {
                    "La Libertad Norte": ["Distrito de Quezaltepeque"],
                    "La Libertad Centro": ["Distrito de Santa Tecla"],
                    "La Libertad Oeste": ["Distrito de Jayaque"],
                    "La Libertad Este": ["Distrito de San José Villanueva"],
                    "La Libertad Costa": ["Distrito de La Libertad"],
                    "La Libertad Sur": ["Distrito de San Pablo Tacachico"]
                },
                "La Paz": {
                    "La Paz Oeste": ["Distrito de San Pedro Masahuat"],
                    "La Paz Centro": ["Distrito de Zacatecoluca"],
                    "La Paz Este": ["Distrito de Olocuilta"]
                },
                "La Unión": {
                    "La Unión Norte": ["Distrito de Santa Rosa de Lima"],
                    "La Unión Sur": ["Conchagua"]
                },
                "Morazán": {
                    "Morazán Norte": ["San Francisco Gotera"],
                    "Morazán Sur": ["Perquín"]
                },
                "San Miguel": {
                    "San Miguel Norte": ["Ciudad Barrios"],
                    "San Miguel Centro": ["Moncagua"],
                    "San Miguel Sur": ["San Miguel"]
                },
                "San Salvador": {
                    "San Salvador Norte": ["Aguilares"],
                    "San Salvador Oeste": ["Apopa"],
                    "San Salvador Este": ["Ilopango"],
                    "San Salvador Centro": ["San Salvador"],
                    "San Salvador Sur": ["Panchimalco"]
                },
                "San Vicente": {
                    "San Vicente Norte": ["Apastepeque","San Esteban Catarina","San ildefonso","San Lorenzo","San Sebastian","Santa Clara","Santo Domingo"],
                    "San Vicente Sur": ["Tecoluca","Verapaz","Nuevo Tepetian","Guadalupe","San Vicente","San Cayetano Istepeque"]
                },
                "Sonsonate": {
                    "Sonsonate Norte": ["Juayúa","Nahuizalco","Salcoatitan","Santa Catarina Masahuat"],
                    "Sonsonate Centro": ["Sonsonate","Sonzacate","Nahulingo","San Antonio del Monte","Santo Domingo de Guzman"],
                    "Sonsonate Este": ["Izalco","Armenia","Caluco","San Julian","Cuisnahuat","Santa Isabel Ishuatan"],
                    "Sonsonate Oeste": ["Acajutla"]
                },
                "Santa Ana": {
                    "Santa Ana Norte": ["Metapán","Santa Rosa Guachipilin","Masahuat","Texistepeque"],
                    "Santa Ana Centro": ["Santa Ana"],
                    "Santa Ana Este": ["Coatepeque","El Congo"],
                    "Santa Ana Oeste": ["Chalchuapa","El Porvenir","Candelaria de la frontera","San Antonio Pajonal"]
                },
                "Usulutan": {
                    "Usulután Norte": ["Alegría", "Santiago de Maria","Berlin","Mercedes Umaña","Jucuapa","Villa El Triunfo"],
                    "Usulután Este": ["Usulutan","Jucuaran","San Dionicio","Concepcion Batres","Santa Maria","Ozatlan"],
                    "Usulután Oeste": ["Jiquilisco","Puerto El Triunfo","San Agustin","San Francisco Javier"]
                }
            }
        };
    },
    computed: {
        filteredAlumnos() {
            return this.alumnos.filter(alumno => {
                const query = this.searchQuery.toLowerCase();
                return (
                    alumno.nombre.toLowerCase().includes(query) || 
                    alumno.codigo.toLowerCase().includes(query)
                );
            });
        },
        municipiosDisponibles() {
            return this.departamento ? Object.keys(this.datos[this.departamento] || {}) : [];
        },
        distritosDisponibles() {
            return this.departamento && this.municipio ? (this.datos[this.departamento][this.municipio] || []) : [];
        }
    },
    methods: {
        eliminarAlumno(alumno) {
            if (confirm(`¿Está seguro de eliminar el alumno ${alumno.nombre}?`)){
                localStorage.removeItem(alumno.codigo);
                this.listarAlumnos();
            }
        },
        verAlumno(alumno) {
            this.codigo = alumno.codigo;
            this.nombre = alumno.nombre;
            this.direccion = alumno.direccion;
            this.departamento = alumno.departamento;
            this.municipio = alumno.municipio;
            this.distrito = alumno.distrito;
            this.telefono = alumno.telefono;
            this.fechaNacimiento = alumno.fechaNacimiento;
            this.sexo = alumno.sexo;
        },
        guardarAlumno() {
            let alumno = {
                codigo: this.codigo,
                nombre: this.nombre,
                direccion:this.direccion,
                departamento: this.departamento,
                municipio: this.municipio,
                distrito: this.distrito,
                telefono: this.telefono,
                fechaNacimiento: this.fechaNacimiento,
                sexo: this.sexo
            };
            localStorage.setItem(this.codigo, JSON.stringify(alumno));
            this.listarAlumnos();
        },
        listarAlumnos() {
            this.alumnos = [];
            for (let i = 0; i < localStorage.length; i++) {
                let clave = localStorage.key(i),
                    valor = localStorage.getItem(clave);
                this.alumnos.push(JSON.parse(valor));
            }
        },
        nuevoAlumno() {
            this.codigo = "";
            this.nombre = "";
            this.direccion = "";
            this.departamento = "";
            this.municipio = "";
            this.distrito = "";
            this.telefono = "";
            this.fechaNacimiento = "";
            this.sexo = "";
        }
    },
    watch: {
        departamento() {
            this.municipio = "";
            this.distrito = "";
        },
        municipio() {
            this.distrito = "";
        }
    },
    created() {
        this.listarAlumnos();
    }
}).mount('#app');
