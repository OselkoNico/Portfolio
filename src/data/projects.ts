import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: "gestion-proveedores",
        title: "Gestión de Proveedores",
        description: "Plataforma integral para la administración empresarial de proveedores con autenticación segura JWT, control de acceso basado en roles (RBAC), endpoints RESTful testeados exhaustivamente con Vitest y Supertest, y pipeline automatizado de integración continua con GitHub Actions.",
        longDescription: "Catálogo de proveedores repartido en dos repositorios: un frontend en Angular 21 y una API REST en Node.js, Express y MySQL. Tiene inicio de sesión con JWT y permisos por rol: cualquier usuario consulta el listado y solo el administrador crea, modifica o elimina. El filtrado y la paginación se resuelven en el servidor, la búsqueda lleva antirrebote y un interceptor adjunta el token y gestiona su expiración. La API se prueba con Vitest y Supertest sin necesitar MySQL en marcha, y GitHub Actions ejecuta las pruebas en cada push y pull request.",
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
        longDescription: "API REST para un catálogo de artículos de suministro industrial, con alta, consulta, actualización y baja de artículos identificados por su SKU en lugar del _id interno de MongoDB. Está hecha con Node.js, Express 5 y Mongoose, y el foco del proyecto es el manejo de errores: los controladores solo contienen el camino correcto, lanzan un error propio con código HTTP asociado y un único middleware lo traduce a una respuesta JSON coherente. Usa los códigos de estado con criterio, por ejemplo 409 y no 400 cuando el SKU ya existe, y en producción los errores 500 no exponen detalles. Los errores de validación devuelven además el detalle de cada campo.",
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
        longDescription: "Aplicación full-stack para dar de alta, consultar, editar y eliminar pacientes, dividida en dos partes independientes: una API REST con Node.js y Express 5, y una SPA con React 19, TypeScript y Vite. Las mismas reglas de validación (DNI, código postal y teléfono) se aplican en el servidor y en el formulario, y el DNI, que es el identificador, no se puede modificar al editar. El estado y las operaciones CRUD viven en un hook propio, separados de los componentes, y el cliente HTTP en un servicio con Axios. Tiene tests en las dos partes: la API con Vitest y Supertest, y el frontend con Testing Library. Los datos se guardan en memoria, así que se pierden al reiniciar el servidor.",
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