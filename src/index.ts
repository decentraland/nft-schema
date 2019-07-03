import Ajv from "ajv";
export * from "./types";

const ajv = new Ajv({ async: false }); // options can be passed, e.g. {allErrors: true}

import definitions = require("./schema.json");

ajv.addSchema(definitions);

export enum TYPE_NAMES {
  Schema = "Schema",
  AssetList = "AssetList",
  AssetSchema = "AssetSchema",
  AssetTrait = "AssetTrait",
  File = "File",
  DARList = "DARList",
  DARRegister = "DARRegister",
  DARSchema = "DARSchema",
  TraitDefinition = "TraitDefinition",
  ErrorResponse = "ErrorResponse"
}

export function validateObject(typeName: TYPE_NAMES, asset: any): void {
  if (!ajv.validate("#/definitions/" + typeName, asset)) {
    throw new Error(ajv.errorsText());
  }
}
