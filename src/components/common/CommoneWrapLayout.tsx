import React from 'react'
import TopNavigation from '../navigation/TopNavigation'
import Footer from '../footer/Footer'

type Props = {
    children: React.ReactNode;
}

export default function CommoneWrapLayout({ children }: Props) {
    return (
        <div className="relative ">
            <div className="top-0">
                <TopNavigation />
            </div>
            <div className="min-h-screen ">
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}