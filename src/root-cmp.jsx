import { Home } from './pages/home'
import './assets/styles/styles.scss'
import { AppHeader } from './pages/app-common/app-header'
import { AppFooter } from './pages/app-common/app-footer'

export function App() {
    return (
        <div className='app'>
            <AppHeader />
            <main className='main-layout'>
                <Home />
            </main>
            <AppFooter />
        </div>
    )
}
