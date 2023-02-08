import Nav from "./Nav.js";
import Footer from "./Footer.js";
import Banner from "./Banner.js";
import Reserve from "./Reserve.js";
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from "./Api.js";
import { useNavigate } from 'react-router-dom';


function Booking() {

    function submitForm(formData) {
        if (submitAPI(formData)) {
            console.log(formData);
            navigate("/confirm", {state:formData});
        }
        

    }

    function updateTimes(state, action) {
        if (action.type !== undefined) {
            return {
                availableTimes: fetchAPI(new Date(action.type))
            };
        }
        throw Error('Unkown action')
    }

    function initializeTimes() {
        return {
            availableTimes: fetchAPI(new Date())
        };
    }
 
  
    const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes);
    const navigate = useNavigate();

    return (
        <div>
            <Nav />
            <Banner />
            <Reserve times={state.availableTimes} upTimes={dispatch} book={submitForm} />
            <Footer />
        </div>
    );
}

export default Booking;