import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store"

test("renders sidebar title", () => {
  render(<Provider store={store}><App /></Provider>);
  const sidebarTitle = screen.getByText(/cities app/i);
  expect(sidebarTitle).toBeInTheDocument();
});
