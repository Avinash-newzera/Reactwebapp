import { MockedProvider } from '@apollo/client/testing';
import { LoadText } from "../Graphql/Querries";
import Text from "../Text/Text"
import Apitext from "../Text/Apitext"
import {render, cleanup} from '@testing-library/react';
import"@testing-library/jest-dom"
import ReactDOM from 'react-dom';

afterEach(cleanup);

it("renders without crashing",()=>{
  const div = document.createElement("div");
  ReactDOM.render(<Apitext/>,div)
})




const mocks=[
  {
    request:{
      query:LoadText,
    },
    result:{
      "data": {
        "text": [
          {
            "Text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          },
          {
            "Text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            "Text": "Type Text"
          },
          {
            "Text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        ]
      }
    }}
]

it("renders Text",async()=>{
  const{findByText, getByText}=render(
    <MockedProvider mocks={mocks} addTypename={false} >
      <Text/>
    </MockedProvider>
  );
  expect(getByText("Loading")).toBeInTheDocument();

  const apitext = await findByText("Type Text");
  expect(apitext).toBeInTheDocument();
})



