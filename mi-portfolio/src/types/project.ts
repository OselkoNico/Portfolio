export interface Project {
    id: string;
    title: string;
    description: string;
    tag: string;
    category: "Angular" | "React" | "Node.js & Backend" | "Full Stack";
    tech: string[];
    links: {
        label: string;
        url: string;
        icon?: "github" | "external" | "docs";
    }[];
    repoUrl: string;
    liveUrl?: string;
    metrics?: {
        label: string;
        value: string;
    }[];
};