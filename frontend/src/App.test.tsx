import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders stompy urdf link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Listings/i);
  expect(linkElement).toBeInTheDocument();
});
