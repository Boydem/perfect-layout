import { AppLogo } from './app-logo'
import { MainNav } from './main-nav'
import IconFacebook from '../../assets/images/icon-facebook.svg'
import IconTwitter from '../../assets/images/icon-twitter.svg'
import IconPinterest from '../../assets/images/icon-pinterest.svg'

export function AppFooter() {
    return (
        <div className='app-footer full main-layout'>
            <div className='wrapper'>
                <div className='intro flex'>
                    <div className='fotter-nav-logo flex column justify-between'>
                        <AppLogo />
                        <MainNav />
                    </div>
                    <div className='contact-details'>
                        <p className='txt-opacity-60'>987 Hillcrest Lane</p>
                        <p className='txt-opacity-60'>Irvine, CA</p>
                        <p className='txt-opacity-60'>California 92714</p>
                        <p className='txt-opacity-60'>Call Us : 949-833-7432</p>
                    </div>
                </div>
                <div className='social-copywrite flex'>
                    <ul className='social flex align-center clean-list'>
                        <li>
                            <img src={IconFacebook} alt='IconFacebook' />
                        </li>
                        <div>
                            <img src={IconPinterest} alt='IconPinterest' />
                        </div>
                        <div>
                            <img src={IconTwitter} alt='IconTwitter' />
                        </div>
                    </ul>
                    <div className='copywrite txt-opacity-60'>Copyright 2020. All Rights Reserved</div>
                </div>
            </div>
        </div>
    )
}
