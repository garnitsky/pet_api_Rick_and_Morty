

const CharList = () => {
    return (
        <div>
            <section className="showcase__Wrapper">
                <div className="showcase__Inner">
                    <article className="characterCard__Wrapper">
                        <div className="characterCard__ImgWrapper">
                            <img src="https://rickandmortyapi.com/api/character/avatar/653.jpeg"
                                alt="Plane Crash Survivor" />
                        </div>
                        <div className="characterCard__ContentWrapper">
                            <div className="section">
                                <a href="https://rickandmortyapi.com/api/character/653"
                                    rel="nofollow noopener noreferrer"
                                    target="_blank"
                                    className="externalLink__ExternalLink">
                                    <h2>Plane Crash Survivor</h2>
                                </a>
                                <span className="status">
                                    <span className="status__icon">
                                    </span> unknown - Human</span>
                            </div>
                            <div className="section">
                                <span className="text-gray">Last known location:</span>
                                <a href="https://rickandmortyapi.com/api/location/104"
                                    rel="nofollow noopener noreferrer"
                                    target="_blank"
                                    className="externalLink__ExternalLink">
                                    Near-Duplicate Reality
                                </a>
                            </div>
                            <div className="section">
                                <span className="text-gray">First seen in:</span>
                                <a href="https://rickandmortyapi.com/api/episode/39"
                                    rel="nofollow noopener noreferrer"
                                    target="_blank"
                                    className="externalLink__ExternalLink">
                                    The Vat of Acid Episode
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default CharList;