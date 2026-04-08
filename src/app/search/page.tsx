'use client';

import { useEffect } from 'react';
import Nav from '@/app/components/Nav';
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';

export default function GeoschemePage() {
    const { ref, focusKey, focusSelf } = useFocusable({
        trackChildren: true,
        saveLastFocusedChild: true,
      });
    
    useEffect(() => {
        focusSelf();
    }, [focusSelf]);
    return (
        <div>
            <FocusContext.Provider value={focusKey}>
                <main ref={ref} className="">
                    <Nav />
                </main>
            </FocusContext.Provider>
        </div>
    )
}