type KeyStates = { shiftKey: boolean; metaKey: boolean; ctrlKey: boolean; altKey: boolean };

let currentEvent: KeyStates = { shiftKey: false, metaKey: false, ctrlKey: false, altKey: false };

const update = (e: KeyboardEvent) => {
    currentEvent = {
        shiftKey: e.shiftKey,
        metaKey: e.metaKey,
        ctrlKey: e.ctrlKey,
        altKey: e.altKey
    };
};

if (typeof window !== "undefined") {
    window.addEventListener("keydown", update);
    window.addEventListener("keyup", update);
}

export const getKeyState = (): KeyStates => currentEvent;