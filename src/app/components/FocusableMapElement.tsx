'use client';

import { useFocusable } from "@noriginmedia/norigin-spatial-navigation"

interface Props {
    children: React.ReactNode;
    onEnter?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    coords: { x: string, y: string };
}

export const FocusableMapElement = ({ children, onEnter, onFocus, onBlur, coords }: Props) => {
    const { ref, focused } = useFocusable({
        onEnterPress: onEnter,
        onFocus: onFocus,
        onBlur: onBlur,
    });
    return (
        <div
            ref={ref}
            className={`absolute transition-all duration-200 border-4 ${focused ? 'border-transparent' : 'border-transparent'}`}
            style={{ left: coords.x, top: coords.y }}
        >
            {children}
        </div>
    )
}