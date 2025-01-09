// app/components/Card.test.js
import { render, screen, waitFor } from "@testing-library/react";
import Card from "./page";
import Home from "../page";

describe("Home Page", () => {
  test("test case for card", async() => {
    render(<Home/>)
    const heading = await screen.findByText("ISRO Centres");
    // expect(heading).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
