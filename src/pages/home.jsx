import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { AdvantagesList } from './cmps/advantages-list'

import HomePattern1 from '../assets/images/bg-pattern-home-1.svg'
import HomePattern2 from '../assets/images/bg-pattern-home-2.svg'
import AvatarKady from '../assets/images/avatar-kady.jpg'
import AvatarAiysha from '../assets/images/avatar-aiysha.jpg'
import AvatarArthur from '../assets/images/avatar-arthur.jpg'
import IconQuotes from '../assets/images/icon-quotes.svg'

export function Home() {
    return (
        <main className='home full main-layout'>
            <AppHeader />
            <section className='hero full main-layout'>
                <div className='wrapper'>
                    <h1>
                        Find the best <span className='pink-txt'>talent</span>
                    </h1>
                    <p className='type-18 hero-p'>
                        Finding the right people and building high performing teams can be hard. Most companies aren’t
                        tapping into the abundance of global talent. We’re about to change that.
                    </p>
                </div>
                <div className='bot-patterns full main-layout'>
                    <img src={HomePattern2} alt='HomePattern2' />
                </div>
                <div className='left-patterns side-start'>
                    <img src={HomePattern1} alt='homePattern1' />
                </div>
            </section>
            <section className='advantages full main-layout'>
                <div className='wrapper'>
                    <h2>Build & manage distributed teams like no one else.</h2>
                    <div className='advanteges-wrapper'>
                        <AdvantagesList />
                    </div>
                </div>
            </section>
            <section className='recommendations full main-layout'>
                <div className='wrapper'>
                    <h2>
                        Delivering real results for top companies. Some of our{' '}
                        <span className='green-txt'>success stories.</span>
                    </h2>
                    <div className='recommendations-list'>
                        <div className='recommendations-item'>
                            <div className='quotes'>
                                <img src={IconQuotes} alt='IconQuotes' />
                            </div>
                            <p className='recommendation-body type-15'>
                                “Amazing. Our team helped us build an app that delivered a new experience for hiring a
                                physio. The launch was an instant success with 100k downloads in the first month.”
                            </p>
                            <div className='written-by green-txt'>Arthur Clarke</div>
                            <div className='avatar-62'>
                                <img src={AvatarArthur} alt='AvatarArthur' />
                            </div>
                        </div>
                        <div className='recommendations-item'>
                            <div className='quotes'>
                                <img src={IconQuotes} alt='IconQuotes' />
                            </div>
                            <p className='recommendation-body type-15'>
                                “We needed to automate our entire onboarding process. The team came in and built out the
                                whole journey. Since going live, user retention has gone through the roof!”
                            </p>
                            <div className='written-by green-txt'>Aiysha Reese</div>
                            <div className='avatar-62'>
                                <img src={AvatarAiysha} alt='AvatarAiysha' />
                            </div>
                        </div>
                        <div className='recommendations-item'>
                            <div className='quotes'>
                                <img src={IconQuotes} alt='IconQuotes' />
                            </div>
                            <p className='recommendation-body type-15'>
                                “The team perfectly fit the specialized skill set required. They focused on the most
                                essential features helping us launch the platform eight months faster than planned.”
                            </p>
                            <div className='written-by green-txt'>Kady Baker</div>
                            <div className='avatar-62'>
                                <img src={AvatarKady} alt='avatarKady' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='cta full main-layout'>
                <div className='wrapper'>
                    <h2>Ready to get started?</h2>
                    <button className='btn green'>contact us</button>
                </div>
            </section>
            <AppFooter />
        </main>
    )
}
