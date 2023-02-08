

import Card from 'react-bootstrap/Card';



function MenuCard(props) {
    
    return (
        <div className="card">
            <Card style={{ width: '18em' }}>
                <Card.Img className="cardimg" variant="top" src={props.path} alt={props.title}/>
                <Card.Body>
                    <Card.Title style={{ float: "right", color: "red", textAlign: "end" }}>{props.price}</Card.Title>
                    <Card.Title><b>{props.title}</b></Card.Title>
                   
                    <Card.Text> {props.text}</Card.Text>
                    <button> Order Online </button>

                </Card.Body>
            </Card>
        </div>
    );
}

function Menu() {
    
    const menuItems = [
        {
            title: "Greek Salad",
            price: "$12.99",
            path: () => require("../icons_assets/greeksalad.jpg"),
            text: "Our famous healthy authentic Greek salad. Made with freshly grown lettuce, tomatoes, olives, onions and feta cheese all the way from Greece. It's a guest favorite and a must try.",
        },
        {
            title: "Bruschetta",
            price: "$9.99",
            path: () => require("../icons_assets/bruschetta.jpg"),
            text: "Freshly baked sourdough bread toasted and topped with fresh cherry tomatoes grown right here at our restaurant, feta cheese from greece and juicy olives from italy.",
        },
        {
            title: "Lemon Cake",
            price: "$11.05",
            path: () => require("../icons_assets/lemon dessert.jpg"),
            text: "Always save room for our delectable desserts. Our lemon cake is made with yummy vanilla olive oil sponge cake, with layers of lemon mascrapone cheese frosting.",
        },


    ]
    const items = menuItems.map((items) => (
        <MenuCard title={items.title} price={items.price} path={items.path()} text={items.text} />
    ));

    return (
        <div className="menucard">
            {items}
        </div>
    );

}

export default Menu;