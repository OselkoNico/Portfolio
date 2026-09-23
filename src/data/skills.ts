import type { SkillCategory } from "../types/skill";

export const skillCategories: SkillCategory[] = [
    {
        title: "Lenguajes Núcleo",
        icon: "globe-code",
        skills: [
            {
                id: "javascript",
                icon: { source: "brand", name: "javascript" },
                title: "JavaScript (ES6+)",
                subTitle: "ECMAScript Moderno • Runtime Agnostic",
                description: "Uso riguroso de concurrencia con Async/Await, programación funcional, closures, manipulación eficiente del DOM, context binding y herencia prototípica limpia.",
                badge: "Fundamentos sólidos",
                percentage: 50,
                subSkills: ["Async/Await", "Closures", "DOM API", "Prototipos"]
            },
            {
                id: "typescript",
                icon: { source: "brand", name: "typescript" },
                title: "TypeScript",
                subTitle: "Static Typing • Enterprise Reliability",
                description: "Diseño de contratos robustos mediante interfaces, Generic constraints, tipos condicionales, Utility types y Type Guards para arquitecturas predecibles y mantenibles.",
                badge: "En formación",
                percentage: 43,
                subSkills: ["Generics", "Type Guards", "Interfaces", "Discriminated Unions"]
            },
        ]
    },
    {
        title: "Frontend & UI Architecture",
        icon: "monitor-pc",
        skills: [
            {
                id: "angular",
                icon: { source: "brand", name: "angular" },
                title: "Angular",
                description: "Arquitectura modular estructurada, componentes desacoplados, servicios singleton, inyección de dependencias (DI) jerárquica y enrutamiento con guards.",
                badge: "Fundamentos sólidos",
                subSkills: ["DI", "Modules", "Routing Guards"]
            },
            {
                id: "react-vite",
                icon: { source: "brand", name: "react" },
                title: "React & Vite",
                description: "Ecosistema moderno con hooks personalizados (Custom Hooks), optimizaciones de ciclo de vida con memo/useMemo, Context API y flujos rápidos de bundle con Vite.",
                badge: "Fundamentos sólidos",
                subSkills: ["Custom Hooks", "Context API", "Vite SPA"]
            },
            {
                id: "rxjs",
                icon: { source: "brand", name: "rxjs" },
                title: "RxJS",
                description: "Programación reactiva funcional: Observables, BehaviorSubjects, gestión de streams asíncronos y operadores analíticos de transformación (switchMap, debounceTime).",
                badge: "En formación",
                subSkills: ["Observables", "Subjects", "Pipes"]
            },
            {
                id: "redux-context",
                icon: { source: "brand", name: "redux" },
                title: "Redux & Context",
                description: "Gestión de estado global escalable y predecible, inmutabilidad de datos, dispatchers asíncronos y partición de stores para reducir re-renders innecesarios.",
                badge: "En formación",
                subSkills: ["Redux Toolkit", "State Slices", "Immutability"]
            },
            {
                id: "html5",
                icon: { source: "brand", name: "html" },
                title: "HTML5 Semántico & Tailwind CSS",
                description: "Diseño adaptativo Mobile-First, layouts con CSS Grid y Flexbox avanzado, microanimaciones de alto rendimiento e integración de accesibilidad WCAG y buenas prácticas SEO.",
                badge: "Consolidado",
                subSkills: ["CSS Grid/Flex", "Tailwind Utility-First", "WCAG A11y", "Responsive Ergonomics"]

            }
        ]
    },
    {
        title: "Backend & Arquitectura",
        icon: "server",
        skills: [
            {
                id: "nodejs",
                icon: { source: "brand", name: "node.js" },
                title: "Node.js",
                description: "Arquitectura no bloqueante en servidor, aprovechamiento profundo del Event Loop, manejo eficiente de Buffer y Streams.",
                focus: "Server Runtime"
            },
            {
                id: "express",
                icon: { source: "brand", name: "express" },
                title: "Express",
                description: "Diseño de pipelines modulares, middlewares de autenticación y validación, gestión centralizada y segura de errores.",
                focus: "Middleware Stack"
            },
            {
                id: "api-restful",
                icon: { source: "generic", name: "network" },
                title: "APIs RESTful",
                description: "Endpoints semánticos estandarizados, códigos de estado HTTP precisos, contratos versionados y schemas validados.",
                focus: "API Design"
            },
            {
                id: "jwt-auth",
                icon: { source: "generic", name: "key-round" },
                title: "JWT & Auth",
                description: "Autenticación stateless, esquemas Access/Refresh Tokens seguros, hashing robusto con Bcrypt y Role-Based Access Control.",
                focus: "Security • RBAC"
            }
        ]
    },
    {
        title: "Persistencia & Bases de Datos",
        icon: "database",
        skills: [
            {
                id: "mysql",
                icon: { source: "brand", name: "mysql" },
                title: "MySQL",
                description: "Diseño relacional 3NF, relaciones foráneas (1:N, N:M), consultas optimizadas con JOINs, creación de índices compuestos y transacciones ACID.",
                badge: "RELACIONAL",
                focus: "Optimización SQL",
                level: "Consolidado"
            },
            {
                id: "mongodb",
                icon: { source: "brand", name: "mongodb" },
                title: "MongoDB",
                description: "Almacenamiento NoSQL orientado a documentos BSON, pipeline de agregación, colecciones desacopladas y modelado de datos desnormalizados de alto rendimiento.",
                badge: "NOSQL",
                focus: "Aggregation Pipeline",
                level: "Fundamentos sólidos"
            },
            {
                id: "mongoose",
                icon: { source: "brand", name: "mongoose" },
                title: "Mongoose",
                description: "Modelado de esquemas fuertemente tipados, hooks pre/post save, middlewares de validación a nivel de modelo y population eficiente entre colecciones.",
                badge: "ODM LAYER",
                focus: "Schema Validation",
                level: "En formación"
            }
        ]
    },
    {
        title: "Testing, DevOps & Herramientas",
        icon: "robot-arm",
        skills: [
            {
                id: "vitest-supertest",
                icon: { source: "brand", name: "vitest" },
                title: "Vitest & Supertest",
                description: "Testing unitario ágil con Vitest simulando dependencias complejas. Pruebas de integración para endpoints HTTP con Supertest verificando contratos reales.",
                badge: "UNIT • INTEGRATION",
                subSkills: ["TDD Basics", "Mocks & Spies", "HTTP Assertions"]
            },
            {
                id: "jest-cypress",
                icon: { source: "brand", name: "jest" },
                title: "Jest & Cypress",
                description: "Suites de pruebas en frontend y backend, comprobación de snapshots de interfaz y testing End-to-End simulando interacción real del usuario en el navegador.",
                badge: "E2E • COMPONENTS",
                subSkills: ["E2E Flows", "UI Coverage", "Regression Checks"]
            },
            {
                id: "git-github",
                icon: { source: "brand", name: "git" },
                title: "Git & GitHub",
                description: "Gestión estricta de ramas (GitFlow), resolución controlada de conflictos, commits semánticos, apertura de Pull Requests y revisiones de código en equipo.",
                badge: "VERSION CONTROL",
                subSkills: ["Semantic Commits", "Code Reviews", "Branching Strategy"]
            },
            {
                id: "github-actions",
                icon: { source: "brand", name: "github-actions" },
                title: "GitHub Actions",
                description: "Configuración de pipelines CI/CD automatizados para validación linter, compilación de TypeScript y ejecución de test en cada push y PR.",
                badge: "AUTOMATION",
                subSkills: ["Workflows YAML", "CI Gates", "Build Automation"]
            },
            {
                id: "docker",
                icon: { source: "brand", name: "docker" },
                title: "Docker",
                description: "Contenedorización de entornos de desarrollo, creación de Dockerfiles eficientes, multi-stage builds, orquestación local de base de datos + backend vía Docker Compose.",
                badge: "CONTAINERS",
                subBadge: { label: "ESTADO DE USO", value: "Dev • Compose Stack"},
                subSkills: ["Dockerfile", "Docker Compose", "Container Isolation"]
            }
        ]
    }
];