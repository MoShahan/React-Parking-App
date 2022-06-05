import { render } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

describe("Snapshot", () => {
  test("App...", () => {
    const { AppComp } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(AppComp).toMatchSnapshot();
  });
});
