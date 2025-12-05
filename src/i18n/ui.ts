import aces from "@/assets/academic/es.json";
import acen from "@/assets/academic/en.json";

export const ui = {
    es: {
        nav: {
            home: "Inicio",
            academic: "Académico",
            projects: "Proyectos",
            contact: "Contacto",
        },
        welcome: {
            title: "Sistema",
            content: "👋 Hola, bienvenido a mi portafolio digital.",
        },
        academicData: aces.academicRecord,
        academic: {
            title: "SIGA - Sistema de Información de Gestión Académica",
            systemName: "SISTEMA DE INFORMACIÓN",
            systemName2: "DE GESTIÓN ACADÉMICA",
            studentSession: "Sesión de ESTUDIANTE",
            studentLocation: "Estudiante - CASA CENTRAL",
            curricularProgress: "Avance Curricular",
            student: "Alumno:",
            career: "Carrera:",
            careerName:
                "Ing. Civil Informática, Casa Central Valparaíso, Vigente (2023)",
            rut: "RUT:",
            role: "Rol:",
            approved: "Aprobados",
            failed: "Reprobados",
            total: "Total",
            semester: "Semestre",
            subjects: "materias",
            print: "Imprimir",
            back: "Volver",
            studentPlaceholder: "ESTUDIANTE",
            rutPlaceholder: "XX.XXX.XXX-X",
            rolePlaceholder: "XXXXXXXXX-X",
        },
        home: {
            term1: [
                {
                    command: true,
                    text: "whoami",
                },
                {
                    command: false,
                    text: "Soy Matias Peñaloza, también conocido como madmti. Un ingeniero apasionado que transforma problemas complejos en soluciones digitales elegantes. Actualmente estudio en la Universidad Técnica Federico Santa María, donde combino el rigor académico con la innovación del mundo real.",
                    colors: {
                        madmti: "text-green-400",
                        "Universidad Técnica Federico Santa María":
                            "text-blue-400",
                    },
                },
                {
                    command: true,
                    text: "cat filosofia.txt",
                },
                {
                    command: false,
                    text: "Creo en el poder del Open Source para democratizar la tecnología. Cada sistema debe ser eficiente, cada interfaz intuitiva y cada solución sostenible. Más allá del código: entusiasta de la música, jugador de tenis de mesa y amante de los deportes de tabla.",
                    colors: {
                        "Open Source": "text-orange-400",
                    },
                },
            ],
            term2: [
                {
                    command: true,
                    text: 'echo "¿Misión actual?"',
                },
                {
                    command: false,
                    text: "Contribuir a la Iniciativa de Código Abierto de mi universidad mientras exploro la intersección entre la optimización del rendimiento y la experiencia del usuario.",
                    colors: {
                        "Iniciativa de Código Abierto": "text-purple-400",
                    },
                },
            ],
            ghprofile: {
                btn: "Ver Github",
            },
            ghorg: {
                btn: "Ver Organización",
                desc: "LyossUSM es una iniciativa de comunidad para Linux y OpenSource de la Universidad Técnica Federico Santa María",
            },
        },
    },
    en: {
        nav: {
            home: "Home",
            academic: "Academic",
            projects: "Projects",
            contact: "Contact",
        },
        welcome: {
            title: "System",
            content: "👋 Hi there! Welcome to my portfolio.",
        },
        academicData: acen.academicRecord,
        academic: {
            title: "SIGA - Academic Management Information System",
            systemName: "ACADEMIC MANAGEMENT",
            systemName2: "INFORMATION SYSTEM",
            studentSession: "STUDENT Session",
            studentLocation: "Student - MAIN CAMPUS",
            curricularProgress: "Curricular Progress",
            student: "Student:",
            career: "Career:",
            careerName:
                "Computer Engineering, Main Campus Valparaíso, Active (2023)",
            rut: "ID:",
            role: "Role:",
            approved: "Approved",
            failed: "Failed",
            total: "Total",
            semester: "Semester",
            subjects: "subjects",
            print: "Print",
            back: "Back",
            studentPlaceholder: "STUDENT",
            rutPlaceholder: "XX.XXX.XXX-X",
            rolePlaceholder: "XXXXXXXXX-X",
        },
        home: {
            term1: [
                {
                    command: true,
                    text: "whoami",
                },
                {
                    command: false,
                    text: "I'm Matias Peñaloza, also known as madmti. A passionate engineer who transforms complex problems into elegant digital solutions. Currently pursuing my degree at Universidad Técnica Federico Santa María , where I blend academic rigor with real-world innovation.",
                    colors: {
                        madmti: "text-green-400",
                        "Universidad Técnica Federico Santa María":
                            "text-blue-400",
                    },
                },
                {
                    command: true,
                    text: "cat philosophy.txt",
                },
                {
                    command: false,
                    text: "I believe in the power of Open Source to democratize technology. Every system should be efficient, every interface intuitive, and every solution sustainable. Beyond code: music enthusiast, table tennis player, and board sports lover.",
                    colors: {
                        "Open Source": "text-orange-400",
                    },
                },
            ],
            term2: [
                {
                    command: true,
                    text: 'echo "Current mission?"',
                },
                {
                    command: false,
                    text: "Contributing to my university's Open Source Initiative while exploring the intersection of performance optimization and user experience.",
                    colors: {
                        "Open Source Initiative": "text-purple-400",
                    },
                },
            ],
            ghprofile: {
                btn: "View Github",
            },
            ghorg: {
                btn: "View Organization",
                desc: "LyossUSM is a community initiative for Linux and OpenSource at Universidad Técnica Federico Santa María",
            },
        },
    },
} as const;
