import '../scss/myWork.scss';
import code from '../assets/programistyczne_kody.png';

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
                        <a className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/stenders.png\')' }} href="https://www.stenders-cosmetics.com" target="_blank" rel="noreferrer">
                            <div className="Work__TileBlur" />
                            <p className="Work__TileText">
                                Stenders Cosmetics
                                <p className="Work__TileTextAdditional">
                                    Worked on the frontend (React, Sass), SEO optimizations, bot rendering issues and GTM implementations.
                                </p>
                            </p>
                        </a>
                        
                        <a className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/moonclimbing.png\')' }} href="https://moonclimbing.com" target="_blank" rel="noreferrer">
                            <div className="Work__TileBlur" />
                            <p className="Work__TileText">
                                Moonclimbing
                                <p className="Work__TileTextAdditional">
                                    Worked on the frontend (AlpineJS, Tailwindcss) and backend (Magento 2) of the application.
                                </p>
                            </p>
                        </a>

                        <a className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/rareseeds.png\')' }} href="https://www.rareseeds.com" target="_blank" rel="noreferrer">
                            <div className="Work__TileBlur" />
                            <p className="Work__TileText">
                                Rareseeds
                                <p className="Work__TileTextAdditional">
                                    Worked on the frontend (React, Sass) of the app.
                                </p>
                            </p>
                        </a>

                        <a className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/taxi.png\')' }} href="https://taxi29krasnystaw.pl" target="_blank" rel="noreferrer">
                            <div className="Work__TileBlur" />
                            <p className="Work__TileText">
                                Taxi 29 Krasnystaw
                                <p className="Work__TileTextAdditional">
                                    This is one of my older projects. It&apos;s surely not the most beautiful website I&apos;ve made however I&apos;ve learned a lot while developing it a few years back.
                                </p>
                            </p>
                        </a>

                        <a className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/pastelove.png\')' }} href="https://pastelove.pl/" target="_blank" rel="noreferrer">
                            <div className="Work__TileBlur" />
                            <p className="Work__TileText">
                                Pastelove
                                <p className="Work__TileTextAdditional">
                                    Developed the whole frontend for the website. (Wordpress, Woocommerce)
                                </p>
                            </p>
                        </a>

                        <a className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/diamond.png\')' }} href="https://www.diamondmansion.com/" target="_blank" rel="noreferrer">
                            <div className="Work__TileBlur" />
                            <p className="Work__TileText">
                                Diamond Mansion
                                <p className="Work__TileTextAdditional">
                                    Seo fixes, SEO optimizations, GTM implementation. (Magento 2, PWA Studio)
                                </p>
                            </p>
                        </a>

                        <a className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/invicta.png\')' }} href="https://invictastores.com/" target="_blank" rel="noreferrer">
                            <div className="Work__TileBlur" />
                            <p className="Work__TileText">
                                Invicta
                                <p className="Work__TileTextAdditional">
                                    Seo fixes, SEO optimizations, GTM implementation, GA4 measurement protocol implementation. (Magento 2, ScandiPWA)
                                </p>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="Work__codeImageWrapper">
                <img src={ code } className="Work__codeImage"/>
            </div>
        </section>
    )
}

export default MyWork;