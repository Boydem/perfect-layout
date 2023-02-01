import HomePattern3 from '../../assets/images/bg-pattern-home-3.svg'
import { AdvantagesList } from '../cmps/advantages-list'

export function Advantages() {
    const listDemo = [
        {
            _id: 'rg43k',
            icon: 'person',
            title: 'Experienced Individuals',
            body: 'Our network is made up of highly experienced professionals who are passionate about what they do.',
        },
        {
            _id: 'r23k',
            icon: 'person',
            title: 'Easy to Implement',
            body: 'Our processes have been refined over years of implementation meaning our teams always deliver.',
        },
        {
            _id: 'r443k',
            icon: 'person',
            title: 'Enhanced Productivity',
            body: 'Our customized platform with in-built analytics helps you manage your distributed teams.',
        },
    ]

    return (
        <section className='advantages full main-layout'>
            <div className='wrapper'>
                <h2>Build & manage distributed teams like no one else.</h2>
                <div className='advantages-wrapper'>
                    <AdvantagesList listDemo={listDemo} />
                </div>
            </div>
            <div className='right-patterns'>
                <img src={HomePattern3} alt='HomePattern3' />
            </div>
        </section>
    )
}
