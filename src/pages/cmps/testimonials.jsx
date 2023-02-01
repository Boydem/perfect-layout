import AvatarKady from '../../assets/images/avatar-kady.jpg'
import AvatarAiysha from '../../assets/images/avatar-aiysha.jpg'
import AvatarArthur from '../../assets/images/avatar-arthur.jpg'
import IconQuotes from '../../assets/images/icon-quotes.svg'

import HomePattern5 from '../../assets/images/bg-pattern-home-4-about-3.svg'
import HomePattern6 from '../../assets/images/bg-pattern-home-5.svg'
export function Testimonials() {
    return (
        <section className='testimonial full main-layout'>
            <div className='left-patterns full'>
                <img src={HomePattern5} alt='patterns' />
            </div>
            <div className='right-patterns'>
                <img src={HomePattern6} alt='patterns' />
            </div>
            <div className='wrapper'>
                <h2>
                    Delivering real results for top companies. Some of our{' '}
                    <span className='green-txt'>success stories.</span>
                </h2>
                <ul className='testimonial-list clean-list'>
                    <li className='testimonial-item'>
                        <div className='quotes'>
                            <img src={IconQuotes} alt='IconQuotes' />
                        </div>
                        <p className='testimonial-body type-15'>
                            “Amazing. Our team helped us build an app that delivered a new experience for hiring a
                            physio. The launch was an instant success with 100k downloads in the first month.”
                        </p>
                        <div className='written-by green-txt'>Arthur Clarke</div>
                        <div className='avatar-62'>
                            <img src={AvatarArthur} alt='AvatarArthur' />
                        </div>
                    </li>
                    <li className='testimonial-item'>
                        <div className='quotes'>
                            <img src={IconQuotes} alt='IconQuotes' />
                        </div>
                        <p className='testimonial-body type-15'>
                            “We needed to automate our entire onboarding process. The team came in and built out the
                            whole journey. Since going live, user retention has gone through the roof!”
                        </p>
                        <div className='written-by green-txt'>Aiysha Reese</div>
                        <div className='avatar-62'>
                            <img src={AvatarAiysha} alt='AvatarAiysha' />
                        </div>
                    </li>
                    <li className='testimonial-item'>
                        <div className='quotes'>
                            <img src={IconQuotes} alt='IconQuotes' />
                        </div>
                        <p className='testimonial-body type-15'>
                            “The team perfectly fit the specialized skill set required. They focused on the most
                            essential features helping us launch the platform eight months faster than planned.”
                        </p>
                        <div className='written-by green-txt'>Kady Baker</div>
                        <div className='avatar-62'>
                            <img src={AvatarKady} alt='avatarKady' />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
