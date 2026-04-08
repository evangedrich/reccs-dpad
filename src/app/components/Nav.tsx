'use client';

import { FocusableElement } from './FocusableElement';
import { useRouter } from 'next/navigation';

export default function Nav() {
    const router = useRouter();
    const navItems: string[] = ["Home", "Geoscheme", "Search"];
    const navLocations: string[] = ["", "geoscheme", "search"];
    const focusChange = (el: HTMLElement | null) => {
        return el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    };
    return (
        <div className="flex bg-[var(--color-mid)] w-fit rounded-full m-auto my-[1vw]">
            {navItems.map((item,i) => (
                <FocusableElement 
                    key={`nav${item}`} 
                    onEnter={() => router.push(`/${navLocations[i]}`)} 
                    onFocus={(el) => focusChange(el)}
                    shape={true} 
                >
                    <div className={`px-[1vw] py-[0.5vw] text-[1.25vw] bg-[var(--color-mid)] font-bold rounded-full`}>{item}</div>
                </FocusableElement>
            ))}
        </div>
    )
}