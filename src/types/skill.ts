import type { IconName, IconSkillBrand, IconSkillGeneric } from "./icon";

export interface Skill {
    id: string;
    icon: SkillIcon;
    title: string;
    subTitle?: string;
    description: string;
    badge?: string;
    subBadge?: {
        label: string;
        value: string;
    };
    percentage?: number;
    subSkills?: string[];
    focus?: string;
    level?: string;
}

export interface SkillCategory {
    title: string;
    icon: IconName;
    skills: Skill[];
}

type SkillIcon =
  | { source: "brand"; name: IconSkillBrand }
  | { source: "generic"; name: IconSkillGeneric };