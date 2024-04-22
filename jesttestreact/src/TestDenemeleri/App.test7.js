import { render, screen } from '@testing-library/react';
import App from '../App';

test("app.js testing", () => {
  render(<App />);

  // const element = screen.getByDisplayValue("testing")
  // expect(element).toBeInTheDocument();

  // const element = screen.getByTestId("test")
  // expect(element).toBeInTheDocument();

  // const element = screen.getByText("Link")
  // expect(element).toBeInTheDocument();
  // const element = screen.getByText("Link")
  // expect(element.href).toContain("http://");
  const element = screen.getByAltText("image")
  expect(element).toBeInTheDocument();
})
