"use client"

import { init } from '@noriginmedia/norigin-spatial-navigation'

init({
    debug: false,
    visualDebug: false,
})

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>
}