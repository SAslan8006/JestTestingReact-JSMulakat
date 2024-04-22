import { render, screen } from '@testing-library/react';
import App from '../App';

test("app.js testing", () => {
  render(<App />);

  // const element = screen.getByRole("button")
  const element = screen.getByRole("textbox")  //input role olarak textboxdır
  expect(element).toBeInTheDocument();
})
