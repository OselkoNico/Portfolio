import type { IconName } from "./icon";

export interface Speciality {
    id: string;
    icon: IconName;
    label: string;
    title: string;
    description: string;
    tech: string[];
};