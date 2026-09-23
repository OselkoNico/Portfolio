import type { Practice } from "../types/practice";

export const practices: Practice[] = [
    { 
        icon: "bug",
        title: "Testing Exhaustivo",
        description: "Test unitarios y de integración con Vitest, Jest y Supertest. Enfoque en coverage funcional, control de edge cases y mockeos desacoplados.",
        finalNote: "Unit & E2E Validation"
    },
    { 
        icon: "git-pull-request-create-arrow",
        title: "Git Flow Ordenado",
        description: "Estrategia rigurosa de ramas ('feature/*', 'fix/*', 'release/*'), convencional commits semánticos y Pull Requests con code reviews exhaustivas.",
        finalNote: "Conventional Commits"
    },
    { 
        icon: "book-open-text",
        title: "Documentación & DX",
        description: "READMEs estructurados con diagramas de arquitectura, comandos reproducibles paso a paso, variables de entorno documentadas y tipado estricto.",
        finalNote: "Zero-Config Spinup"
    }
];