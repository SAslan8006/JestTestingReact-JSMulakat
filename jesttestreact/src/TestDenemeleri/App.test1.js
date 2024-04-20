import { render, screen } from "@testing-library/react";
import App from './App2';

test("app.js test işlemleri", async () => {
  render(<App />);
  // const element = screen.getByText('react testing')
  // const element = screen.queryByText('react testing')
  // const element = screen.findByText('react testing')
  // const element = screen.queryByText('Mehmet')
  // expect(element).not.toBeInTheDocument()
  const element = await screen.findByText('Mehmet')
  expect(element).toBeInTheDocument()
})

// describe("Button testleri", () => {
//   test('app.js test işlemleri', () => {
//     render(<App />);
//     // const element = screen.getByText('react testing')
//     // const element = screen.getByText(/react testing/i)
//     const element = screen.getByText('react testing',
//       { exact: false }
//     )

//     expect(element).toBeInTheDocument()
//   });

//   test('app.js test işlemleri 2', () => {
//     render(<App />);
//     // const element = screen.getByText('react testing')
//     const element = screen.getByText(/react testing/i)
//     // const element = screen.getByText('react testing',
//     //   { exact: false }
//     // )

//     expect(element).toBeInTheDocument()
//   });
// });

// describe("Textlerin testleri", () => {
//   test('app.js test işlemleri', () => {
//     render(<App />);
//     // const element = screen.getByText('react testing')
//     // const element = screen.getByText(/react testing/i)
//     const element = screen.getByText('react testing',
//       { exact: false }
//     )

//     expect(element).toBeInTheDocument()
//   });

//   test('app.js test işlemleri 2', () => {
//     render(<App />);
//     // const element = screen.getByText('react testing')
//     const element = screen.getByText(/react testing/i)
//     // const element = screen.getByText('react testing',
//     //   { exact: false }
//     // )

//     expect(element).toBeInTheDocument()
//   });
// });