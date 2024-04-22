import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

test("app.js testing", async () => {
  const user = userEvent.setup();
  const { container } = render(<App />);
  console.log(container)
})
