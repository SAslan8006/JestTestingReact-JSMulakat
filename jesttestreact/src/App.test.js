import { render, screen, waitFor } from "@testing-library/react";
import App from './App';

test("app.js testing", async () => {
  render(<App />);
  // const element = await screen.findByText('Mehmet')
  // const element = screen.getByText('Mehmet')
  let element
  await waitFor(() => {
    element = screen.getByText('Mehmet');
  })


  expect(element).toBeInTheDocument();
})


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