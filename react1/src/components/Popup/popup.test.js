import {render, cleanup,screen, fireEvent} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import ReactDOM from 'react-dom';
import Popup from './Popup';
import Contact from "./Contact"
import"@testing-library/jest-dom"
import {CREATE_USER_MUTATION} from"../Graphql/Mutations"
import { notDeepEqual } from 'assert';
import { expect } from '@jest/globals';


afterEach(cleanup);

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Contact/>,div)
})


const mocks=[
    {
      request:{
        query:CREATE_USER_MUTATION,
      },
      result:{

      }}
  ]
  



it('renders popup correct', () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false} >
        <Popup/>
      </MockedProvider> );
    const logo = screen.getByText('Contact');
    fireEvent.click(logo);
    const Icons = screen.getAllByRole("img")
    var source = ["images/fb.png","images/twt.png","images/ln.png"];   
    var alt = ["facebook","tweeter","linkedin"]
    for (var i=0; i < 3; i++) {
        expect(Icons[i]).toHaveAttribute('src', source[i]);
        expect(Icons[i]).toHaveAttribute('alt', alt[i]);
        };
    const Name =screen.getByPlaceholderText("Enter your name here");
    fireEvent.change(Name, { target: { value: 'Tester' } })
    const Email =screen.getByPlaceholderText("Enter your e-mail address here");
    fireEvent.change(Email, { target: { value: 'Tester@Test' } })
    const Message =screen.getByPlaceholderText("Wanna share something with us?");
    fireEvent.change(Message, { target: { value: 'Testing....' } })
    const Submit=screen.getByText("Submit");
    expect(Submit).toBeInTheDocument();
    fireEvent.click(Submit);
    expect(Submit).not.toBeInTheDocument();
    

});















  
  