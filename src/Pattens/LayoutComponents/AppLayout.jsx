

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Sidebar from './Sidebar'
import SplitScreen from './SplitScreen'

export default function AppLayout() {
    return (
        <div className=' flex flex-col h-screen'>
            <Header />
            <SplitScreen LeftWeight={20} RightWeight={80}>
                <Sidebar />
                <Content />
            </SplitScreen>
            <Footer />
        </div>
    )
}
