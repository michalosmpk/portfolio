import '../scss/aboutMe.scss';
import AboutMeImg from '../assets/AboutMe.png';

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
                            Hello! My name is Michał and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>
                        <p className="About__MainText">
                            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                        </p>
                        <p className="About__MainText">
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <div className="About__Technologies">
                            <ul>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>PHP</li>
                                <li>Sass</li>
                            </ul>
                        </div>
                    </div>
                    <div className="About__RightCol">
                        <img className="About__Image" src={ AboutMeImg } />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;