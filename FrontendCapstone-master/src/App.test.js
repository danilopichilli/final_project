import { render, screen } from '@testing-library/react';
import App from './App';
import Booking from './Components/Booking.js';



test('Renders the BookingForm heading', () => {
    render(<Booking />);
    const headingElement = screen.getByText("RESERVE A TABLE");
    expect(headingElement).toBeInTheDocument();
})