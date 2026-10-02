import { Monitor, Server, ShieldCheck, Globe, Database, Bot } from "lucide-react";
import type { IconName } from "../types/icon";

export const iconNameMap: Record<IconName, typeof Monitor> = {
    "globe-code": Globe,
    "monitor-pc": Monitor,
    "server": Server,
    "database": Database,
    "robot-arm": Bot,
    "shield-check": ShieldCheck
};