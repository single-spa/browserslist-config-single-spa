import browserslist from "browserslist";
import queries from "./browserslist-config-single-spa.js";

describe("browsereslist-config-single-spa", () => {
  it("exports a valid browserslist config for single-spa", () => {
    const browsers = browserslist(queries);
    expect(browsers).toMatchSnapshot();
  });
});
