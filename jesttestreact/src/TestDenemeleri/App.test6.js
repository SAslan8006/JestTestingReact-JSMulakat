import { render, screen } from "@testing-library/react";
import App from './App';

test("app.js testing", () => {
  render(<App />);
  // const element = screen.getByTitle("test")
  // expect(element).toBeInTheDocument();
  // expect(element).toBeInTheDocument();

  // const element = screen.getByRole("button")
  // expect(element).toBeInTheDocument();

  const element = screen.getAllByRole("button")
  // h1 yazılamaz bunlar heading diye geçer getByRoleleri
  expect(element[0]).toBeInTheDocument();

})
