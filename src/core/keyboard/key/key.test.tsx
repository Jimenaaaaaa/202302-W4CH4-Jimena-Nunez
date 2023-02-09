import { render, screen } from "@testing-library/react";
import { SingleKey } from "./key";

describe("Given the Key function", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the screen", () => {
      render(<SingleKey></SingleKey>);
      const element = screen.getByText(/1/);
      expect(element).toBeInTheDocument();
    });
  });
});
