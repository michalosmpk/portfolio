import '../scss/myWork.scss';

function MyWork() {
    return (
        <section className="Work">
            <div className="ContentWrapper">
                <h2 className="About__Heading sectionHeading">
                    <span>2. </span>
                    My work
                </h2>

                <div className="Work__Content">
                    <div className="Work__Grid">
                        <div className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/work_placeholder.jpeg\')' }}>
                            <div className="Work__TileBlur" />
                            <div className="Work__TileText">
                                Delfiny w wodzie
                            </div>
                        </div>
                        
                        <div className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/work_placeholder.jpeg\')' }}>
                            <div className="Work__TileBlur" />
                            <div className="Work__TileText">
                                Delfiny w wodzie
                            </div>
                        </div>

                        <div className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/work_placeholder.jpeg\')' }}>
                            <div className="Work__TileBlur" />
                            <div className="Work__TileText">
                                Delfiny w wodzie
                            </div>
                        </div>

                        <div className="Work__Tile" style={{ backgroundImage: 'url(\'src/assets/work/work_placeholder.jpeg\')' }}>
                            <div className="Work__TileBlur" />
                            <div className="Work__TileText">
                                Delfiny w wodzie
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyWork;