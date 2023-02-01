import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import './assets/styles/styles.scss'

export function App() {
    return (
        <div className='app'>
            <main className='main-layout'>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
        </div>
    )
}
