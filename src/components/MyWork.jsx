import "../scss/myWork.scss";
import code from "../assets/programistyczne_kody.png";
import stenders from "../assets/work/stenders.png";
import moonclimbing from "../assets/work/moonclimbing.png";
import rareseeds from "../assets/work/rareseeds.png";
import taxi from "../assets/work/taxi.png";
import pastelove from "../assets/work/pastelove.png";
import diamond from "../assets/work/diamond.png";
import invicta from "../assets/work/invicta.png";

function MyWork() {
  return (
    <section className="Work" id="MyWork">
      <div className="ContentWrapper">
        <h2 className="About__Heading sectionHeading">
          <span>2. </span>
          My work
        </h2>

        <div className="Work__Content">
          <div className="Work__Grid">
            <a
              className="Work__Tile"
              style={{ backgroundImage: `url('${stenders}')` }}
              href="https://www.stenders-cosmetics.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="Work__TileBlur" />
              <p className="Work__TileText">
                Stenders Cosmetics
                <p className="Work__TileTextAdditional">
                  Worked on the frontend (React, Sass), SEO optimizations, bot
                  rendering issues and GTM implementations.
                </p>
              </p>
            </a>

            <a
              className="Work__Tile"
              style={{ backgroundImage: `url('${moonclimbing}')` }}
              href="https://moonclimbing.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="Work__TileBlur" />
              <p className="Work__TileText">
                Moonclimbing
                <p className="Work__TileTextAdditional">
                  Worked on the frontend (AlpineJS, Tailwindcss) and backend
                  (Magento 2) of the application.
                </p>
              </p>
            </a>

            <a
              className="Work__Tile"
              style={{ backgroundImage: `url('${rareseeds}')` }}
              href="https://www.rareseeds.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="Work__TileBlur" />
              <p className="Work__TileText">
                Rareseeds
                <p className="Work__TileTextAdditional">
                  Worked on the frontend (React, Sass) of the app.
                </p>
              </p>
            </a>

            <a
              className="Work__Tile"
              style={{ backgroundImage: `url('${taxi}')` }}
              href="https://taxi29krasnystaw.pl"
              target="_blank"
              rel="noreferrer"
            >
              <div className="Work__TileBlur" />
              <p className="Work__TileText">
                Taxi 29 Krasnystaw
                <p className="Work__TileTextAdditional">
                  This is one of my older projects. It&apos;s surely not the
                  most beautiful website I&apos;ve made however I&apos;ve
                  learned a lot while developing it a few years back.
                </p>
              </p>
            </a>

            <a
              className="Work__Tile"
              style={{ backgroundImage: `url('${pastelove}')` }}
              href="https://pastelove.pl/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="Work__TileBlur" />
              <p className="Work__TileText">
                Pastelove
                <p className="Work__TileTextAdditional">
                  Developed the whole frontend for the website. (Wordpress,
                  Woocommerce)
                </p>
              </p>
            </a>

            <a
              className="Work__Tile"
              style={{ backgroundImage: `url('${diamond}')` }}
              href="https://www.diamondmansion.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="Work__TileBlur" />
              <p className="Work__TileText">
                Diamond Mansion
                <p className="Work__TileTextAdditional">
                  Seo fixes, SEO optimizations, GTM implementation. (Magento 2,
                  PWA Studio)
                </p>
              </p>
            </a>

            <a
              className="Work__Tile"
              style={{ backgroundImage: `url('${invicta}')` }}
              href="https://invictastores.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="Work__TileBlur" />
              <p className="Work__TileText">
                Invicta
                <p className="Work__TileTextAdditional">
                  Seo fixes, SEO optimizations, GTM implementation, GA4
                  measurement protocol implementation. (Magento 2, ScandiPWA)
                </p>
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="Work__codeImageWrapper">
        <img src={code} className="Work__codeImage" />
      </div>
    </section>
  );
}

export default MyWork;
