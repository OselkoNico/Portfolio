# 🚀 Portfolio

Bienvenido/a a mi portfolio personal.

Este proyecto nace con el objetivo de convertirse en el **proyecto más completo de mi perfil como desarrollador Full Stack** y, al mismo tiempo, en mi carta de presentación profesional en el mundo del desarrollo.

La idea es crear una página web en la que pueda **mostrar mis proyectos, conocimientos y evolución como programador**, además de ofrecer una forma sencilla de **contactar conmigo**.

Durante el desarrollo iré poniendo en práctica y afianzando los conocimientos adquiridos durante mi formación, mientras continúo aprendiendo, mejorando y experimentando con nuevas tecnologías y herramientas.

### 🎯 Objetivos

* 💻 Desarrollar y afianzar mis conocimientos.
* 📚 Seguir aprendiendo y mejorar mis habilidades como desarrollador.
* 🛠️ Aplicar buenas prácticas de desarrollo y organización del código.
* 🚀 Incorporar nuevas tecnologías y funcionalidades.
* 📈 Mostrar mi evolución y crecimiento como programador.
* 🧩 Presentar mis proyectos y experiencia de una forma clara y profesional.
* 📬 Facilitar que empresas, recruiters u otros desarrolladores puedan contactar conmigo.

### 🛠️ Tecnologías

*En esta sección actualmente están las tecnologías que he ido aprendiendo en mi carrera como pogramador, a medida que vaya implementándolas iré actualizándolo.*

* JavaScript
* TypeScript
* React
* Node.js
* Express
* APIs REST
* MySQL
* MongoDB
* Git & GitHub
* Testing
* Docker

### 📌 Estado del proyecto

🟡 **En desarrollo**

Este proyecto se encuentra en desarrollo activo y evolucionará progresivamente junto con mis conocimientos.

El objetivo final es convertirlo en una **página web completa y profesional** que represente quién soy como desarrollador, qué sé hacer, qué proyectos he realizado y cómo he ido evolucionando a lo largo de mi trayectoria.

### 📖 Evolución

Este README también irá evolucionando junto con el proyecto. A medida que se incorporen nuevas funcionalidades, tecnologías y mejoras, se irá actualizando para mantener documentado el progreso.

> **Este portfolio no pretende mostrar únicamente el resultado final, sino también el camino recorrido para llegar hasta él.**

---

⭐ **Un proyecto en constante evolución, construido para crecer conmigo.**


---

## Esquema del proyecto:

mi-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── avatar.jpg
│   │   └── og-image.png
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx           # botón primario/secundario (Ver proyectos, Descargar CV...)
│   │   │   ├── Badge.tsx            # etiquetas tipo "REACT" "TYPESCRIPT" "AVANZADO"
│   │   │   ├── Card.tsx             # tarjeta base reutilizable (bordes, fondo oscuro)
│   │   │   ├── SectionEyebrow.tsx   # el label pequeño tipo "● ARQUITECTURA DE SOFTWARE"
│   │   │   └── CodeWindow.tsx       # el bloque tipo terminal (developer.config.ts, profile.status.sh)
│   │   │
│   │   └── layout/
│   │       ├── Navbar.tsx           # nav con Inicio/Proyectos/Habilidades/Sobre mí, CV, avatar
│   │       ├── Footer.tsx           # el pie con ubicación, email, github
│   │       └── Layout.tsx           # envuelve Navbar + <Outlet/> + Footer
│   │
│   ├── sections/                    # bloques grandes que arman cada página
│   │   ├── Hero.tsx                 # home: nombre, título, CTA, code window
│   │   ├── Specialties.tsx          # home: "Especialidades Clave" (Frontend/Backend/Datos)
│   │   ├── FeaturedProjects.tsx     # home: 2 proyectos destacados
│   │   ├── ProjectsGrid.tsx         # página proyectos: filtros + grid completo
│   │   ├── BestPractices.tsx        # página proyectos: "Buenas Prácticas Aplicadas"
│   │   ├── AboutIntro.tsx           # página sobre mí: perspectiva híbrida + stats
│   │   ├── Timeline.tsx             # página sobre mí: "Hitos & Trayectoria"
│   │   ├── ContactForm.tsx          # página sobre mí: formulario + datos de contacto
│   │   ├── SkillsMatrix.tsx         # página habilidades: categorías 01-05
│   │   ├── TransferableSkills.tsx   # página habilidades: resolución analítica, etc.
│   │   └── CtaBanner.tsx            # banner reutilizable "¿Buscas un desarrollador...?"
│   │
│   ├── pages/
│   │   ├── Home.tsx                 # compone Hero + Specialties + FeaturedProjects + CtaBanner
│   │   ├── Projects.tsx             # compone ProjectsGrid + BestPractices
│   │   ├── Skills.tsx               # compone SkillsMatrix + TransferableSkills
│   │   └── About.tsx                # compone AboutIntro + Timeline + ContactForm
│   │
│   ├── data/
│   │   ├── projects.ts              # array de proyectos (TaskOps, EcoEnergy, API Artículos...)
│   │   ├── skills.ts                # array de tecnologías por categoría
│   │   ├── specialties.ts           # las 3 tarjetas de especialidades
│   │   └── timeline.ts              # los hitos de tu trayectoria
│   │
│   ├── types/
│   │   ├── project.ts               # interface Project
│   │   ├── skill.ts                 # interface Skill, SkillCategory
│   │   └── timeline.ts              # interface Milestone
│   │
│   ├── hooks/
│   │   └── useProjectFilter.ts      # lógica del filtro Todos/Angular/React/Node/Full Stack
│   │
│   ├── App.tsx                      # define las rutas con react-router-dom
│   ├── main.tsx                     # punto de entrada (no lo tocas apenas)
│   └── index.css                    # @import "tailwindcss";
│
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── .gitignore

---

## Paso a paso que debo seguir para crear el proyecto:

1. Rutas y esqueleto de navegación:

- Instala react-router-dom y define en App.tsx las 4 rutas (Inicio, Proyectos, Habilidades, Sobre mí) apuntando a componentes de página vacíos (solo un <h1>Proyectos</h1>, por ejemplo). Crea un Layout.tsx que envuelva Navbar + <Outlet/> + Footer. Objetivo: poder navegar entre las 4 páginas antes de tener ni un solo diseño. Para explicarlo: por qué una SPA con Router evita recargar la página completa, qué es el <Outlet/>, y la diferencia entre layout compartido y rutas anidadas.

2. Modela los datos con TypeScript:

- Antes de escribir ni un componente visual, define en types/ las interfaces: Project, Skill, SkillCategory, Milestone. Pregúntate qué campos necesita cada tarjeta que viste en las capturas (título, stack, url del repo, nivel de dominio...). Para explicarlo: por qué modelar los datos primero evita refactors después, y cómo un type actúa de 'contrato' entre tus datos y tus componentes.

3. Layout compartido: Navbar y Footer:

- Constrúyelos ahora porque aparecen en las 4 páginas y te dan un marco visual estable para ir viendo el resto del contenido dentro. Usa NavLink de react-router-dom para resaltar la página activa (como el botón 'Proyectos' en azul en tu captura). Para explicarlo: qué diferencia hay entre Link y NavLink, y por qué el estado 'activo' no lo gestionas tú a mano con useState.

4. Contenido estático en data/:

- Rellena data/projects.ts, data/skills.ts, data/timeline.ts con arrays tipados usando las interfaces del paso 2, copiando el contenido real de tus capturas (TaskOps, EcoEnergy, tus tecnologías...). Para explicarlo: por qué separar datos de presentación es más mantenible que hardcodear texto en el JSX (principio de separación de responsabilidades).

5. Componentes UI atómicos:

- Construye Button, Badge, Card y CodeWindow de forma aislada, con props tipadas y sin lógica de negocio dentro. Pruébalos en una página cualquiera antes de usarlos en el diseño final. Para explicarlo: qué es un componente 'tonto' o presentacional, por qué recibe todo por props, y cómo eso lo hace reutilizable en las 4 páginas.

6. Construye página por página, sección por sección:

- Empieza por Home: primero el Hero (la sección más compleja pero la que más aprendizaje te da), luego Specialties, luego FeaturedProjects. Termina una página entera antes de saltar a la siguiente. Para explicarlo: cómo compones componentes pequeños en secciones y secciones en páginas (composición sobre herencia), y por qué map() con una key única es la forma correcta de renderizar listas de proyectos/skills.

7. Añade interactividad:

- El filtro de proyectos (Todos/Angular/React/Node) con useState, y el formulario de contacto con inputs controlados (value + onChange). Déjalo para el final porque ya tienes el contenido estático funcionando y solo añades comportamiento encima. Para explicarlo: qué es un componente controlado en React, y cómo useState dispara un re-render al cambiar el filtro.

8. Pulido final: responsive, accesibilidad y despliegue:

- Revisa cada página en móvil, añade estados de foco visibles, textos alt en imágenes, y despliega en Vercel conectando el repo de GitHub. Para explicarlo: mobile-first con clases responsive de Tailwind (sm:, md:, lg:), y qué hace un despliegue continuo (CI/CD) cada vez que hagas push a main.