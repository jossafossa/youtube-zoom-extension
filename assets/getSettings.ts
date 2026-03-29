import { storage } from "#imports";

export type Settings = {
    SENSITIVITY: number,
    MAX_ZOOM: number,
    MIN_ZOOM: number,
    MODIFIER_KEY: "shiftKey" | "ctrlKey" | "metaKey" | "altKey",
}

export const DEFAULT_SETTINGS: Settings = {
    SENSITIVITY: 0.1,
    MAX_ZOOM: 3,
    MIN_ZOOM: 1,
    MODIFIER_KEY: "shiftKey",
}

export const getSettings = async () => {
    const settings = await storage.getItem<any>("local:settings");

    return {
        ...DEFAULT_SETTINGS,
        ...settings,
    }
}