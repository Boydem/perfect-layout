import iconPerson from '../../assets/images/icon-person.svg'
import iconCog from '../../assets/images/icon-cog.svg'
import iconChart from '../../assets/images/icon-chart.svg'

export function AdvantagesList() {
    return (
        <ul className='advanteges-list'>
            <li className='advanteges-item'>
                <div className='icon gree-txt'>
                    <img src={iconPerson} alt='iconPerson' />
                </div>
                <div className='text-wrapper'>
                    <p className='type-18 pink-txt'>Experienced Individuals</p>
                    <p className='type-16 txt-opacity-80'>
                        Our network is made up of highly experienced professionals who are passionate about what they
                        do.
                    </p>
                </div>
            </li>
            <li className='advanteges-item'>
                <div className='icon gree-txt'>
                    <img src={iconCog} alt='iconCog' />
                </div>
                <div className='text-wrapper'>
                    <p className='type-18 pink-txt'>Experienced Individuals</p>
                    <p className='type-16 txt-opacity-80'>
                        Our network is made up of highly experienced professionals who are passionate about what they
                        do.
                    </p>
                </div>
            </li>
            <li className='advanteges-item'>
                <div className='icon gree-txt'>
                    <img src={iconChart} alt='iconChart' />
                </div>
                <div className='text-wrapper'>
                    <p className='type-18 pink-txt'>Experienced Individuals</p>
                    <p className='type-16 txt-opacity-80'>
                        Our network is made up of highly experienced professionals who are passionate about what they
                        do.
                    </p>
                </div>
            </li>
        </ul>
    )
}
