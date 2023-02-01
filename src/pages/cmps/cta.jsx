import HomePattern6 from '../../assets/images/bg-pattern-home-6-about-5.svg'

export function Cta() {
    return (
        <section className='cta full main-layout'>
            <div className='left-patterns'>
                <img src={HomePattern6} alt='patterns' />
            </div>
            <div className='wrapper'>
                <h2>Ready to get started?</h2>
                <button className='btn green'>contact us</button>
            </div>
        </section>
    )
}
