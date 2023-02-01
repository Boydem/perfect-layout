import { AdvantagesPreview } from './advantages-preview.jsx'

export function AdvantagesList({ listDemo: advantages }) {
    return (
        <ul className='advantages-list'>
            {advantages.map(advantage => {
                return (
                    <li className='advantages-item' key={advantage._id}>
                        <AdvantagesPreview advantage={advantage} />
                    </li>
                )
            })}
        </ul>
    )
}
