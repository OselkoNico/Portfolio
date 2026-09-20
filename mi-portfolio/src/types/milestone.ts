import type { IconMilestone } from "./icon";

export interface Milestone {
    title: string;
    subTitle?: string;
    date: string;
    badge: "ACTUAL" | "ACADÉMICO" | "TÉCNICO";
    description: string;
    detail: MilestoneDetail;
}

type MilestoneDetail =
  | { type: "tags"; items: string[] }
  | { type: "note"; text: string; icon: IconMilestone };