import "../scss/aboutMe.scss";
import AboutMeImg from "../assets/AboutMe.png";

function AboutMe() {
  return (
    <section className="About" id="AboutMe">
      <div className="ContentWrapper">
        <h2 className="About__Heading sectionHeading">
          <span>1. </span>
          About me
        </h2>

        <div className="About__Content">
          <div className="About__LeftCol">
            <p className="About__MainText">
              Programming is basically my hobby. I love finding problems that
              can be solved with a program whether that&apos;s a web shopping
              list so that everyone in the household can see what needs to be
              bought or scraping Apple&apos;s website to check for new
              refurbished products to catch the good deals early.
            </p>
            <p className="About__MainText">
              I have a craving to create. And not just create, but make
              something that has a slick design, follows best practices, is
              optimized and uses a cool technology. I value knowledge from
              colleagues with more experience and I love learning new
              technologies, therefore I cannot even put all of the technologies
              I&apos;ve worked with into the below list.
            </p>
            <p className="About__MainText">
              Here are a few technologies I&apos;ve been working with:
            </p>
            <div className="About__Technologies">
              <ul>
                <li>
                  <div />
                  JavaScript
                </li>
                <li>
                  <div />
                  React
                </li>
                <li>
                  <div />
                  PHP
                </li>
                <li>
                  <div />
                  Sass
                </li>
                <li>
                  <div />
                  Magento 2
                </li>
                <li>
                  <div />
                  SQL
                </li>
                <li>
                  <div />
                  Linux
                </li>
                <li>
                  <div />
                  Ajax
                </li>
                <li>
                  <div />
                  Tailwindcss
                </li>
                <li>
                  <div />
                  Jquery
                </li>
                <li>
                  <div />
                  TypeScript
                </li>
                <li>
                  <div />
                  Alpinejs
                </li>
                <li>
                  <div />
                  ChakraUI
                </li>
                <li>
                  <div />
                  Wordpress
                </li>
                <li>
                  <div />
                  PWA Studio
                </li>
                <li>
                  <div />
                  Python
                </li>
              </ul>
            </div>
          </div>
          <div className="About__RightCol">
            <img className="About__Image" src={AboutMeImg} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
