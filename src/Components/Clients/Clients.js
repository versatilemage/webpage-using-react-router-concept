import "./Clients.css"
function Clients () {
    return(
        <>
        <h1 className="clientHeading">Celebrities who love sushi</h1>
            <div className="clients-container">
                <div className="client-List">
                    <div className="contain-img">
                        <img src="https://variety.com/wp-content/uploads/2019/11/robert-pattinson-feat-image.jpg?w=681&h=383&crop=1" alt="no images found" className="client-image"></img>
                    </div>
                    <div className="client-details">
                        <h3 className="client-name">Robert Pattinson</h3>
                        <p className="client-memo">Famous for his role in The Twilight Saga franchises, And his recent role as The Batman.</p>
                    </div>
                </div>

                <div className="client-List">
                    <div className="contain-img">
                        <img src="http://static.oprah.com/2020/05/202005-omag-michelle-obama-949x534.jpg" alt="no images found" className="client-image"></img>
                    </div>
                    <div className="client-details">
                        <h3 className="client-name">Michelle Obama</h3>
                        <p className="client-memo">Wife of ex.president Barack Obama, Harward graduate, Third time Gallup's poll of the most admired woman in America and many more.</p>
                    </div>
                </div>

                <div className="client-List">
                    <div className="contain-img">
                        <img src="https://townsquare.media/site/252/files/2022/06/attachment-Selena-Gomez-album-cover-ashamed.jpg?w=980&q=75" alt="no images found" className="client-image"></img>
                    </div>
                    <div className="client-details">
                        <h3 className="client-name">Selena Gomez</h3>
                        <p className="client-memo">Singer, Actress, UNICEF's youngest ambassador, first person to reach 100M followers in Instagram and the list goes on.</p>
                    </div>
                </div>
            </div>

            <div className="clients-container">
                <div className="client-List">
                    <div className="contain-img">
                        <img src="https://static01.nyt.com/images/2021/02/12/arts/12justin-item/12justin-item-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="no images found" className="client-image"></img>
                    </div>
                    <div className="client-details">
                        <h3 className="client-name">Justin Timberlake</h3>
                        <p className="client-memo">the recipient of numerous awards and accolades, including ten Grammy Awards, three Brit Awards, nine Billboard Music Awards and the Michael Jackson Video Vanguard Award.</p>
                    </div>
                </div>

                <div className="client-List">
                    <div className="contain-img">
                        <img src="https://variety.com/wp-content/uploads/2020/01/taylor-swift-variety-cover-5-16x9-1000.jpg?w=681&h=383&crop=1" alt="no images found" className="client-image"></img>
                    </div>
                    <div className="client-details">
                        <h3 className="client-name">Taylor Swift</h3>
                        <p className="client-memo">World famous singer, The owner of 10 Grammy awards, 8ACM awards, youngest winner of Grammy awards and more.</p>
                    </div>
                </div>

                <div className="client-List">
                    <div className="contain-img">
                        <img src="https://townsquare.media/site/295/files/2014/02/Richie-Sambora.jpg" alt="no images found" className="client-image"></img>
                    </div>
                    <div className="client-details">
                        <h3 className="client-name">Richie Sambora</h3>
                        <p className="client-memo"> American rock guitarist, singer, songwriter and producer, best known as the lead guitarist of the rock band Bon Jovi.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Clients