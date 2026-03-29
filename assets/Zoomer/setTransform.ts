import { RelativePosition } from "./onMove";

type setTransformProps = {
    element: HTMLElement;
    scale: number;
    position: RelativePosition
}

export const setTransform = ({ element, scale, position }: setTransformProps) => {
    element.style.scale = String(scale);
    element.style.transformOrigin = `${position.x * 100}% ${position.y * 100}%`;
}