import { AppLogo } from './app-logo'
import { MainNav } from './main-nav'

export function AppHeader() {
    return (
        <header className='app-header full main-layout'>
            <div className='wrapper'>
                <AppLogo />
                <MainNav />
                <button className='btn-header-cta btn white'>contact us</button>
            </div>
        </header>
    )
}
