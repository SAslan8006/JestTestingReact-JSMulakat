import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test("app.js testing", async () => {
  const user = userEvent.setup();
  render(<App />);
  screen.debug();
  await user.pointer({
    keys: '[MouseLeft]',
    target: screen.getByRole('button')
  })
  expect(screen.getByRole("heading")).toHaveTextContent(1)
})
