import type { Speciality } from "../types/specialty";

export const specialties: Speciality[] = [
    {
        icon: "monitor-pc",
        label: "CAPA DE CLIENTE",
        title: "Frontend Moderno",
        description: "Desarrollo de interfaces reactivas, accesibles y fluidas. Control riguroso del ciclo de vida, componentes modulares y sincronización de estado optimizada.",
        tech: ["REACT", "ANGULAR", "TYPESCRIPT", "TAILWIND"]
    },
    {
        icon: "server",
        label: "CAPA DE SERVIDOR",
        title: "Backend & APIs",
        description: "Arquitecturas de servicios REST desacopladas y seguras. Implementación de autenticación granular con JWT, middleware de sanitización y control de concurrencia.",
        tech: ["NODE.JS", "EXPRESS", "REST APIS", "JWT AUTH"]
    },
    {
        icon: "shield-check",
        label: "PERSISTENCIA & CALIDAD",
        title: "Datos & Calidad",
        description: "Modelado relacional y documental con MySQL y MongoDB. Pruebas unitarias e integración continua con Vitest, Supertest y flujos CI/CD automatizados.",
        tech: ["MYSQL", "MONGODB", "VITEST", "GH ACTIONS"]
    }
];