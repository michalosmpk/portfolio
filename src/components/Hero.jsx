import '../scss/hero.scss';
import downArrow from '../assets/downArrow.svg';

function Hero() {
    return (
        <section className="Hero">
            <p className="Hero__TopText">Cześć, nazywam się</p>
            <p className="Hero__MiddleText">Michał Kaszak.</p>
            <div className="Hero__Separator" />
            <p className="Hero__BottomText">
                Jestem programistą który zajmuje się robieniem stron internetowych czymśtam no i czymśtam jeszcze. Chętnie podejmę z tobą współpracę. Zajrzyj do mojego portfolio i cośtam cośtam.
            </p>
            <img src={ downArrow } className="Hero__DownArrow" />
        </section>
    )
}

export default Hero;