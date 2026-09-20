import type { IconName, IconSkill } from "./icon";

export interface Skill {
    id: string;
    icon: IconSkill;
    title: string;
    subTitle?: string;
    description: string;
    badge: string;
    percentage?: number;
    subSkills: string[];
}

export interface SkillCategory {
    title: string;
    icon: IconName;
    skills: Skill[];
}