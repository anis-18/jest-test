import { getAllByRole, render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/react";
import App from "./src/App";

test("shows 6 products by default", async () => {
  render(<App />);

  const headings = await screen.findAllByRole("heading");
  expect(headings).toHaveLength(6);
});

test("shows 12 products after clicking load more button", async () => {
  render(<App />);

  const loadMoreButton = screen.findByRole("button", {
    name: /load more/i
  });
  await user.click(loadMoreButton);

  await waitFor(async () => {
    const headings = await screen.findAllByRole("heading");
    expect(headings).toHaveLength(12);
  });
});
