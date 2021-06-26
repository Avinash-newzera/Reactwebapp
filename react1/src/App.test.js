import react from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen,fireEvent} from '@testing-library/react';

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<App></App>,div)
})



it('renders correct Logo', () => {
    render(<App/>);
    const logo = screen.getByTestId('logo');
    expect(logo).toHaveAttribute('src', 'images/Cat-N-Dog-Logo.png');
    expect(logo).toHaveAttribute('alt', 'Logo');
  });



  it('Updates sucessfully', () => {
    render(<App/>);
    const logo = screen.getByText('Contact');
    fireEvent.click(logo);
    const Name = screen.getByPlaceholderText("Enter your name here")
    fireEvent.change(Name, { target: { value: 'Tester' } })
    const Email = screen.getByPlaceholderText("Enter your e-mail address here")
    fireEvent.change(Email, { target: { value: 'Tester@test' } })
    const Message = screen.getByPlaceholderText("Wanna share something with us?")
    fireEvent.change(Message, { target: { value: 'hi Tester' } })
    const submit =screen.getByText('Submit');
    // fireEvent.click(submit)



});
