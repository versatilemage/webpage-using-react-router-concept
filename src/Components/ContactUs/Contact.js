import "./Contact.css"
function Contact () {
    return(
        <>
            <div className="service-bg1">
            <img src="https://img.jakpost.net/c/2018/12/22/2018_12_22_61429_1545467105._large.jpg" className="services-image" alt="no images found"></img>
                <div className="left-side">
                    <div className="leftcontainer">
                    <h2>Locations</h2>
                    <p>Our resturant has over 20+ franchises in India, Which has main branch located in Chennai</p>
                    </div>
                </div>
            </div>
            <footer className="footers">
                <div className="footings">
                    <p className="contact-foo-left">contact us</p>
                    <p className="contact-text"><label className="label-location">e: </label>sushimakers@sushi.com</p>
                    <p className="contact-text"><label className="label-location">t: </label>9876543210</p>
                </div>
                <div className="mid-footer">
                    <div className="mid-foo1">
                        <label className="city-name">Chennai</label>
                        <ul>
                            <li className="address">OMR Old Mahaballipuram Road</li>
                            <li className="address">Near Guindy Park</li>
                            <li className="address">Adayar</li>
                            <li className="address">T.Nagar</li>
                        </ul>
                    </div>

                    <div className="mid-foo1">
                        <label className="city-name">Bangalore</label>
                        <ul>
                            <li className="address">OMR Old Mahaballipuram Road</li>
                            <li className="address">Near Guindy Park</li>
                            <li className="address">Adayar</li>
                            <li className="address">T.Nagar</li>
                        </ul>
                    </div>

                    <div className="mid-foo1">
                        <label className="city-name">Coimbatore</label>
                        <ul>
                            <li className="address">OMR Old Mahaballipuram Road</li>
                            <li className="address">Near Guindy Park</li>
                            <li className="address">Adayar</li>
                            <li className="address">T.Nagar</li>
                        </ul>
                    </div>

                    <div className="mid-foo1">
                        <label className="city-name">Hydrabad</label>
                        <ul>
                            <li className="address">OMR Old Mahaballipuram Road</li>
                            <li className="address">Near Guindy Park</li>
                            <li className="address">Adayar</li>
                            <li className="address">T.Nagar</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Contact