import Card from 'react-bootstrap/Card';

function ReviewCard(props) {

    return (
        <div className="card">
            <Card style={{ width: '15em' }}>
               <Card.Header><b> {props.rating}</b> </Card.Header>
                <Card.Img className="reviewimg" variant="top" src={props.path} alt={props.name} /> <b>{props.name}</b>
                <Card.Body>
                   <Card.Text> {props.text}</Card.Text>
               </Card.Body>
            </Card>
        </div>
    );
}

function Review() {
    const profiles = [
        {
            rating: "5 Stars",
            path: () => require("../icons_assets/review1.jpg"),
            name: "Anisha",
            text: "Amazing food and amazing service. A must visit place for authentic mediterranian food.",

        },
        {
            rating: "4 Stars",
            path: () => require("../icons_assets/review1.jpg"),
            name: "Amaara",
            text: "Good food and amazing decor. The salmon and lemon cake are a must try!",

        },
        {
            rating: "3.5 Stars",
            path: () => require("../icons_assets/review3.png"),
            name: "Harsha",
            text: "Food was good, especially the tiramisu. But the service was not that great.",

        },
        {
            rating: "5 Stars",
            path: () => require("../icons_assets/review1.jpg"),
            name: "Rhaya",
            text: "Delicious food and very pretty place. Definitely recommend this place.",

        },

    ]

    const reviews = profiles.map((review) => (
        <ReviewCard rating={review.rating} path={review.path()} name={review.name} text={review.text} />
    ));
    return (
        <div className="menucard">
            {reviews}
        </div>
    );

}

export default Review;