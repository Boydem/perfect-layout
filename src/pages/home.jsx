import { Hero } from './cmps/hero'
import { Advantages } from './cmps/advantages'
import { Testimonials } from './cmps/testimonials'
import { Cta } from './cmps/cta'

export function Home() {
    return (
        <main className='home full main-layout'>
            <Hero />
            <Advantages />
            <Testimonials />
            <Cta />
        </main>
    )
}
