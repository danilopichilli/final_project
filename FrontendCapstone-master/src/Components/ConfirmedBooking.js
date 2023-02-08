import Nav from "./Nav.js";
import Banner from "./Banner.js";
import Footer from "./Footer.js";
import { useLocation } from 'react-router-dom';

function ConfirmedBooking() {
    const location = useLocation();
    return (
        <>
            <Nav />
            <Banner />
            <section className="confirm">
                <img src={require("../icons_assets/confirm.jpg")} alt="confirm"/>
                <h2> Booking Confirmed </h2>
                <p> Hey {location.state.name}, your booking is confirmed and a confirmation email has been sent to {location.state.email}. Please find the reservation details below:</p>
                <ul>
                    <li><b>Name: </b>{location.state.name} </li>
                    <li><b>Date: </b>{location.state.date} </li>
                    <li><b>Time: </b>{location.state.time} </li>
                    <li><b>Guests: </b> {location.state.guests} </li>
                </ul>
            </section>
            <Footer />
        </>
    )

}

export default ConfirmedBooking;