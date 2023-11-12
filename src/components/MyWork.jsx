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
                        <div className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/work_placeholder.jpeg\')' }}>
                            <div className="Work__TileBlur" />
                            <p className="Work__TileText">
                                Delfiny w wodzie
                                <p className="Work__TileTextAdditional">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere consequuntur itaque nobis ipsa non totam quae laborum mollitia.
                                </p>
                            </p>
                        </div>
                        
                        <div className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/work_placeholder.jpeg\')' }}>
                            <div className="Work__TileBlur" />
                            <p className="Work__TileText">
                                Delfiny w wodzie
                                <p className="Work__TileTextAdditional">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere consequuntur itaque nobis ipsa non totam quae laborum mollitia.
                                </p>
                            </p>
                        </div>

                        <div className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/work_placeholder.jpeg\')' }}>
                            <div className="Work__TileBlur" />
                            <p className="Work__TileText">
                                Delfiny w wodzie
                                <p className="Work__TileTextAdditional">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere consequuntur itaque nobis ipsa non totam quae laborum mollitia.
                                </p>
                            </p>
                        </div>

                        <div className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/work_placeholder.jpeg\')' }}>
                            <div className="Work__TileBlur" />
                            <p className="Work__TileText">
                                Delfiny w wodzie
                                <p className="Work__TileTextAdditional">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere consequuntur itaque nobis ipsa non totam quae laborum mollitia.
                                </p>
                            </p>
                        </div>
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