
export const trackElements = (selector: string, callback: (element: HTMLElement) => void) => {
    const elements = new Set();

    setInterval(() => {
        const element = document.querySelector(selector);

        if (!element) return;

        if (elements.has(element)) return;
        elements.add(element);

        callback(element as HTMLElement);
    }, 100)
}