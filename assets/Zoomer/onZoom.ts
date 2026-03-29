type onZoomProps = {
    element: Element;
    onZoomIn: (event: WheelEvent) => void;
    onZoomOut: (event: WheelEvent) => void;
}

export const onZoom = ({ element, onZoomIn, onZoomOut }: onZoomProps) => {
    element.addEventListener("wheel", (event) => {
        if (!(event instanceof WheelEvent)) return;
        if (event.deltaY < 0) onZoomIn(event)
        if (event.deltaY > 0) onZoomOut(event);
    })
}