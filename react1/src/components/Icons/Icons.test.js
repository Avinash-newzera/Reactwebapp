// import react from 'react';
import ReactDOM from 'react-dom';
import Icons from './Icons';
import { render,cleanup,screen } from '@testing-library/react'
afterEach(cleanup);

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Icons></Icons>,div)
})

var source = ["images/playstore.png","images/AppStoreBadge.svg","images/fb.png","images/twt.png","images/ln.png"];   
var alt = ["playstore","appstore","facebook","tweeter","linkedin"]
it('renders correct Logo', () => {
    render(<Icons/>);
    const logo = screen.getAllByRole('img');
    for (var i=0; i < 5; i++) {
        expect(logo[i]).toHaveAttribute('src', source[i]);
        expect(logo[i]).toHaveAttribute('alt', alt[i]);
        }
  });

  