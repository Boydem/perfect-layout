import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home } from './pages/home'
import './assets/styles/styles.scss'
import { AppHeader } from './pages/app-common/app-header'
import { AppFooter } from './pages/app-common/app-footer'
import { useEffect } from 'react'

export function App() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/')
    }, [])
    return (
        <div className='app'>
            <AppHeader />
            <main className='main-layout'>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}
