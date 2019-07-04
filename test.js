const expect = require("expect");
const validator = require("./dist");

const validAsset = {
  uri: "string",
  name: "string",
  description: "string",
  image: "string",
  token_id: "string",
  registry: "string",
  owner: "string",
  traits: [],
  files: []
};

describe("test validator", () => {
  it("must fail validating an invalid asset", () => {
    expect(() => validator.validateObject("AssetSchema", {})).toThrow();
  });

  it("must NOT fail validating a valid asset", () => {
    validator.validateObject("AssetSchema", validAsset);
  });
});
