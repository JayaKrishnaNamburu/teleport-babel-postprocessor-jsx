import { createReactComponentGenerator } from "@teleporthq/teleport-component-generator-react";
import transpileJSX from "../src";
import uidl from "./uidl.json";

describe("Transpiles JSX into JS", () => {
  it("Convertes React JSX into React.createElement", async () => {
    const generator = createReactComponentGenerator();
    generator.addPostProcessor(transpileJSX);

    const result = await generator.generateComponent(uidl);

    expect(result.files.length).toBe(2);
    expect(result.files[0].content).toContain("React.createElement");
  });
});
