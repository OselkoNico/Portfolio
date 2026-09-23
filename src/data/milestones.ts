import type { Milestone } from "../types/milestone";

export const milestones: Milestone[] = [
    {
        title: "Aprendizaje Continuo & Proyectos Propios",
        period: "Febrero 2026 - Presente",
        badge: "ACTUAL",
        description: "Consolidación activa de lo aprendido en el curso mediante el desarrollo de proyectos reales, con especial foco en reforzar tanto las áreas de mayor dominio como aquellas en proceso de afianzar. Incorporación progresiva de nuevas herramientas y patrones a medida que surgen necesidades concretas en cada proyecto.",
        detail: {
            type: "tags", items: ["JavaScript", "TypeScript", "Clean Code", "Git Flow"]
        }
    },
    {
        title: "Curso Superior FullStack Developer",
        subTitle: "Deusto Formación",
        period: "750 Horas Lectivas",
        badge: "ACADÉMICO",
        description: "Programa integral enfocado en el stack moderno MERN/MEAN, arquitecturas cliente-servidor robustas, modelado de bases de datos relacionales y no relacionales, despliegues continuos y metodologías ágiles Scrum.",
        detail: {
            type: "note", text: "Proyectos Prácticos Evaluados", icon: "badge-check"
        }
    },
    {
        title: "Técnico de Instalaciones Especializadas - Fontanería",
        period: "Experiencia Previa",
        badge: "TÉCNICO",
        description: "Gestión operativa de campo en instalaciones de infraestructura técnica. Diagnóstico de averías críticas, cumplimiento de normativas de seguridad, resolución inmediata de incidentes y trato directo con clientes finales.",
        detail: {
            type: "note", text: "Resolución analítica • Trabajo bajo presión",
            icon: "brain-circuit"
        }
    }
]