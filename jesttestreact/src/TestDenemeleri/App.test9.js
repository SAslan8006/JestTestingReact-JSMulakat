import { render, screen } from '@testing-library/react';
import App from '../App';

test("app.js testing", () => {
  render(<App />);
  let obj = {
    name: "Mehmet"
  }
  expect(obj.name).toBe("Mehmet")
  expect(obj).toEqual({ name: "Mehmet" })
  expect(2 + 2).toBe(4)

})
