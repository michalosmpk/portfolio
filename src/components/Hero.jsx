import "../scss/hero.scss";
import downArrow from "../assets/downArrow.svg";

function Hero() {
  return (
    <section className="Hero" id="Hero">
      <div className="Hero__ContentWrapper">
        <p className="Hero__TopText">Hello, I&apos;m</p>
        <p className="Hero__MiddleText">Michał Kaszak</p>
        <div className="Hero__Separator" />
        <p className="Hero__BottomText">
          a young and eager to learn programmer.
        </p>
      </div>
      <div className="Hero__ArrowWrapper">
        <a href="#AboutMe">
          <img src={downArrow} className="Hero__DownArrow" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
