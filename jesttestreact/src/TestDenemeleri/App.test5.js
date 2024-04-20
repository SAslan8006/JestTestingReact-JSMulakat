import { render, screen, waitFor } from "@testing-library/react";
import App from '../App';

test("app.js testing", () => {
  render(<App />);
  const element = screen.getByLabelText("React")
  // expect(element).toBeInTheDocument();
  expect(element).toHaveValue("test");
})
