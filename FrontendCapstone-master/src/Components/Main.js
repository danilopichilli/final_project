import Menu from "./Menu.js";
import Review from "./Review.js";
import { useNavigate } from 'react-router-dom';

function Main() {

    function handleClick() {
        navigate("/booking");

    }
    const navigate = useNavigate();
    const about_info1 = <p> Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
    const about_info2 = <p> Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region. </p>
    const hero_info = <p> Welcome to the Little Lemon Resturant, where we invite guests to celebrate life and share sundry blends of modern and traditional Mediterranean cuisine. </p>
    return (
        <main>
            <section id='hero' className="hero">
                <h1> Little Lemon </h1>
                <img className="image" src={require("../icons_assets/restauranfood.jpg")} alt="food" />
                <h2> Chicago </h2>
                {hero_info}
                <button onClick={handleClick}> Reserve a Table </button>
            </section>
            <section id="menu" className="highlight">
                <h2> Our Menu Highlights! </h2>
                <button> Order Online </button>

                <Menu />
            </section>
            <section id='review' className="review">
                <h2> Testamonials </h2>
                <Review />
            </section>
            <section id='about' className="about">
                <h2> Little Lemon </h2>
                <h3> Chicago </h3>
                <img src={require("../icons_assets/chefa.jpg")} alt="chefImg" /> {about_info1} {about_info2}

            </section>
        </main>
    );
}

export default Main;