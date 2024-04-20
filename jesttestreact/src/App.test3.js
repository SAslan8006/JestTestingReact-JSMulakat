import { render, screen } from "@testing-library/react";
import App from './App';

test("app.js testing", () => {
  render(<App />);
  const element = screen.getAllByText('testing')
  // expect(element[0]).toBeInTheDocument();
  expect(element).toHaveLength(2);
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