import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: "gestion-proveedores",
        title: "Gestión de Proveedores",
        description: "Plataforma integral para la administración empresarial de proveedores con autenticación segura JWT, control de acceso basado en roles (RBAC), endpoints RESTful testeados exhaustivamente con Vitest y Supertest, y pipeline automatizado de integración continua con GitHub Actions.",
        tag: "ENTERPRISE ERP",
        category: ["Angular", "Full Stack"],
        tech: ["Angular", "TypeScript", "RxJS", "Node.js", "Express", "MySQL", "JWT", "bcrypt", "Vitest", "Supertest", "GitHub Actions"],
        links: [{
            label: "Repositorio GitHub",
            url: "https://github.com/OselkoNico/gestion-proveedores",
            icon: "github"
        }]
    },
    {
        id: "gestion-suministros-api",
        title: "API de gestión de suministros",
        description: "API REST para un catálogo de artículos de suministro industrial, identificados por SKU. Proyecto centrado en hacer bien la capa del servidor.",
        tag: "BACKEND SERVICE • REST API",
        category: ["Node.js & Backend"],
        tech: ["Node.js", "Express", "MongoDB", "Mongoose", "dotenv"],
        links: [{
            label: "Repositorio GitHub",
            url: "https://github.com/OselkoNico/gestion-suministros-api",
            icon: "github"
        }]
    },
    {
        id: "gestion-pacientes",
        title: "Gestión de Pacientes",
        description: "Aplicación FullStack para la gestión de pacientes, con validación tanto en servidor como en cliente.",
        tag: "FRONTEND & SERVER • HEALTHCARE",
        category: ["React", "Full Stack"],
        tech: ["React", "TypeScript", "Vite", "Express", "Vitest", "Testing Library", "Supertest"],
        links: [{
            label: "Repositorio GitHub",
            url: "https://github.com/OselkoNico/gestion-pacientes",
            icon: "github"
        }]
    }
];