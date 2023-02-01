import iconPerson from '../../assets/images/icon-person.svg'
import iconCog from '../../assets/images/icon-cog.svg'
import iconChart from '../../assets/images/icon-chart.svg'

export function AdvantagesPreview({ advantage: adv }) {
    if (!adv) return <div>Loading</div>
    return (
        <>
            <div className='icon gree-txt'>
                {adv.icon === 'person' && <img src={iconPerson} alt='person icon' />}
                {adv.icon === 'cog' && <img src={iconCog} alt='cog icon' />}
                {adv.icon === 'chart' && <img src={iconChart} alt='chart icon' />}
            </div>
            <div className='text-wrapper'>
                <p className='type-18 pink-txt'>{adv.title}</p>
                <p className='type-16 txt-opacity-80'>{adv.body}</p>
            </div>
        </>
    )
}
