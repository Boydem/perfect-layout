import HomePattern1 from '../../assets/images/bg-pattern-home-1.svg'
import HomePattern2 from '../../assets/images/bg-pattern-home-2.svg'

export function Hero() {
    return (
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
    )
}
