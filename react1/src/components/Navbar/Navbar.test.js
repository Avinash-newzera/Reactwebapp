import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar from "./Navbar"

test('renders a message', () => {
  const {  getByText } = render(<Navbar />)
  expect(getByText('Home')).toBeInTheDocument()
  expect(getByText('Blog')).toBeInTheDocument()
  expect(getByText('Careers')).toBeInTheDocument()
})




