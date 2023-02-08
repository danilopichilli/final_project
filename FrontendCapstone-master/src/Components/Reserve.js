import { useState } from 'react';
import { useForm } from 'react-hook-form';

function Reserve(props) {

    const formstyle = {
        padding: "5%",
        display: "grid",
        gap: "20px",
        border: "5px solid #333333"
    };

    const Occasions = ["Dinner", "Birthday", "Anniversary", "Graduation"];
    const [date, setDate] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        props.book(data);
    }

    function handleDateChange(e) {
        setDate(e.target.value);
        props.upTimes({ type: e.target.value });

    }
   

    return (
        <div className="bookingform">
            <h2 style={{ textAlign: "center" }}> RESERVE A TABLE </h2>
            <form onSubmit={handleSubmit(onSubmit)} style={formstyle}>

                <label htmlFor="res-name">Name</label>
                <input placeholder="Name" type="text" id="res-name" {...register("name", {required:true, minLength:3, maxLength:15})}/>
                {errors.name && <p style={{ color: "red" }}>Please enter minimum 3 characters</p>}

                <label htmlFor="res-email">Email</label>
                <input placeholder="Email" type="email" id="res-email" {...register("email",{required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} />
                {errors.email && <p>Please check the Email</p>}

                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={handleDateChange} {...register("date", { required: true })}/>

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" {...register("time", { required: true })}>
                    {props.times.map(time => (
                        <option> {time} </option>))
                    }
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" {...register("guests", { required: true })}/>

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" {...register("occasion", { required: true })}>
                    {Occasions.map(occ => (
                        <option> {occ} </option>))
                    }
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
        );
}

export default Reserve;