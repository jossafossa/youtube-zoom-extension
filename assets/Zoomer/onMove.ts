import { clamp } from "./clamp";

export type RelativePosition = {
    x: number;
    y: number;
}

export type onMoveProps = {
    element: HTMLElement;
    onMove: (position: RelativePosition) => void;
}


export const onMove = ({ element, onMove }: onMoveProps) => {
    document.addEventListener("pointermove", (event) => {
        const box = element.getBoundingClientRect();
        const { height, width, x, y } = box;
        const elementX = event.x - x;
        const elementY = event.y - y;
        onMove({
            x: clamp(1 / width * elementX, 0, 1),
            y: clamp(1 / height * elementY, 0, 1),
        })
    })
}