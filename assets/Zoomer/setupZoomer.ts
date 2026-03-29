import { Settings } from "../getSettings";
import { getKeyState } from "./getKeyState";
import { onMove, RelativePosition } from "./onMove";
import { onZoom } from "./onZoom";
import { setTransform } from "./setTransform";

type setupZoomerProps = {
    root: HTMLElement;
    video: HTMLElement;
    settings: Settings
}

export const setupZoomer = ({ root, video, settings }: setupZoomerProps) => {
    const {
        SENSITIVITY,
        MAX_ZOOM,
        MIN_ZOOM,
        MODIFIER_KEY,
    } = settings

    let scale: number = 1;
    let position: RelativePosition = { x: 0, y: 0 };

    const update = () => {
        setTransform({ element: video, scale, position })
    }

    const setScale = (delta: number) => {
        scale = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, scale + delta));
        update();
    }

    const onZoomIn = (event: WheelEvent) => {
        if (!getKeyState()[MODIFIER_KEY]) return;
        event.preventDefault();
        setScale(SENSITIVITY)
    }

    const onZoomOut = (event: WheelEvent) => {
        if (!getKeyState()[MODIFIER_KEY]) return;
        event.preventDefault();
        setScale(-SENSITIVITY)
    }

    const handleMove = (newPosition: RelativePosition) => {
        if (!getKeyState()[MODIFIER_KEY]) return;
        position = newPosition;
        update();
    }

    onZoom({ element: root, onZoomIn, onZoomOut });

    onMove({ element: root, onMove: handleMove })
}