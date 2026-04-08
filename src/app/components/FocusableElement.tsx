'use client'

import { useFocusable } from "@noriginmedia/norigin-spatial-navigation"

interface Props {
    children: React.ReactNode;
    onEnter?: () => void;
    onFocus?: (el: HTMLElement | null) => void;
    shape?: boolean;
}

export const FocusableElement = ({ children, onEnter, onFocus, shape }: Props) => {
    const { ref, focused } = useFocusable({
        onEnterPress: onEnter,
        onFocus: () => onFocus?.(ref?.current ?? null),
        onBlur: () => onFocus?.(null),
    });
    return (
        <div
            ref={ref}
            className={`transition-all duration-200 border-4 ${shape ? 'rounded-full' : 'rounded-xl'} ${focused ? 'border-yellow-500' : 'border-transparent'}`}
        >
            {children}
        </div>
    )
}