import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FocusableMapElement } from './FocusableMapElement';
import Map from '@/app/components/Map';

const focusSubregions = [
    { id: 'AFNO', x: 51, y: 39 },
    { id: 'AFEA', x: 58, y: 50 },
    { id: 'AFSO', x: 54, y: 70 },
    { id: 'AFCE', x: 53, y: 51 },
    { id: 'AFWE', x: 47, y: 44 },
    { id: 'AMNO', x: 27, y: 5 },
    { id: 'AMEA', x: 29, y: 18 },
    { id: 'AMSW', x: 20, y: 30 },
    { id: 'AMNW', x: 18, y: 18 },
    { id: 'AMIN', x: 23, y: 18 },
    { id: 'AMCE', x: 22, y: 42 },
    { id: 'AMCR', x: 29, y: 42 },
    { id: 'AMHI', x: 27, y: 60 },
    { id: 'AMLO', x: 33, y: 60 },
    { id: 'AMSO', x: 32, y: 80 },
    { id: 'ASNO', x: 70, y: 5 },
    { id: 'ASEA', x: 80, y: 35 },
    { id: 'ASSE', x: 78, y: 45 },
    { id: 'ASHI', x: 75, y: 35 },
    { id: 'ASSO', x: 68, y: 35 },
    { id: 'ASWE', x: 61, y: 35 },
    { id: 'ASCE', x: 65, y: 20 },
    { id: 'ASIN', x: 75, y: 20 },
    { id: 'EUEA', x: 57, y: 10 },
    { id: 'EUWE', x: 50, y: 18 },
    { id: 'OCAU', x: 85, y: 75 },
    { id: 'OCMC', x: 90, y: 45 },
    { id: 'OCMD', x: 65, y: 65 },
    { id: 'OCML', x: 90, y: 58 },
    { id: 'OCPL', x: 5, y: 55 },
];

export default function Geoscheme() {
    const [focusID, setFocusID] = useState("");
    const router = useRouter();
    return (
        <div className="relative w-[90vw] m-auto h-[calc(100vh_-_7.5vw)] flex items-center">
                <Map focusID={focusID} />
                <div className="absolute top-0 left-0 w-full aspect-[2/1]">
                    {focusSubregions.map(sub => (
                        <FocusableMapElement key={`nav${`focus${sub.id}`}`} 
                            onEnter={() => router.push(`/geoscheme/${sub.id}`)} 
                            onFocus={() => setFocusID(sub.id)} 
                            onBlur={() => setFocusID("")} 
                            coords={{ x: sub.x+'%', y: sub.y+'%' }}
                        >
                            <div className={`w-10 h-10 bg-transparent`}></div>
                        </FocusableMapElement>
                    ))}
                </div>
        </div>
    )
}