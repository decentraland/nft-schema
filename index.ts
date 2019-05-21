/** A file descriptor. */
export type File = {
  /** File name */
  name: string;
  /** Permanent URL */
  url: string;
  /** IPFS CID */
  cid?: string;
  /** A codename to identify what is the intended purpose of this file. */
  roles?: string[];
};

/** Defines a trait type and its parameters. This is used in registries */
export type TraitDefinition = {
  /** identifier i.e. "dcl:avatar-speed" */
  id: string;
  /** Human-readable name of the trait (for example, “Body type”) */
  name: string;
  /** Display type. */
  display_type?: string;
  /** Type of the trait. */
  type: "string" | "int" | "float" | "boolean" | "range" | "set";
  /** Default value of the trait, if any */
  default_value?: string;
  /** Minimum value (if the type is number) */
  min_value?: number;
  /** Maximum value (if the type is number) */
  max_value?: number;
  /** If the type is "set", an object where the keys are the possible values of the trait. */
  options?: string[];
};

/** Defines a trait's value. This is used in tokens */
export type TraitInstance = {
  /** identifier i.e. "dcl:avatar-speed" */
  id: string;
  /** Value of the trait */
  value?: any;
};

/** A list of registries available in this server. */
export type DARList = {
  /** The list of registries */
  registries: DARRegister[];
};

/**
 * Element of response of the /dar endpoint. Specifies a name and metadata to describe all the DAR in the service.
 */
export type DARRegister = {
  /** A human readable name that identifies the registry */
  name: string;
  /** A human readable name that can be used as identifier instead of the contract address */
  common_name?: string;
  /**
   * The URI of the contract that stores the NFTs
   * example: ethereum://0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d
   */
  contract_uri?: string;
  /**
   * Url to locate a full version of the schema
   * example: "https://nft-service.io/dar/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d"
   */
  schema_url: string;
  /** A brief description of this DAR */
  description: string;
  /** An image/logo of the DAR, it may be a logo. image/png is required. */
  image_url?: string;
};

/**
 * A global definition for an asset type allows for a standardized
 * treatment of assets. An asset type schema should define what fields are
 * required for valid NFT definition of the asset, as well as any optional
 * fields that make for the NFTs that belong to the registry.
 */
export type DARSchema = {
  /** A human readable name that identifies the registry */
  name: string;
  /** A human readable name that can be used as identifier instead of the contract address */
  common_name?: string;
  /** The URI of the contract that stores the NFTs */
  contract_uri: string;
  /** Url to locate this same file */
  schema_url: string;
  /** A brief description of this DAR */
  description: string;
  /** An image/logo of the DAR, it may be a logo. image/png is required. */
  image_url?: string;
  /** The CID of this same file (with this same field set to empty) */
  schema_cid: string;
  /**
   * A definition of fields that are available for NFTs belonging to this
   * contract. The content of this should be namespaced through a key and
   * define the types of the values that can be assigned to each
   * particular field.
   */
  traits: TraitDefinition;
};

/** This is the description of a particular asset. */
export type AssetSchema = {
  /**
   * The representation of the token in full, such that the token can be
   * uniquely identified by the contract that minted the NFT. It should
   * specify the blockchain id, which could be one of "ethereum",
   * "ropsten", etc. One thing to consider here is whether this is
   * extensible enough for Ethereum 2.0 shards or even other non-ethereum
   * chains. A mapping of standard networks should be provided by default
   * Format: chain://{{registry}}/{{token id}}
   * example: ethereum://0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/123
   */
  uri: string;
  /** Name field of the ERC721 Metadata Schema */
  name: string;
  /** Description field of the ERC721 Metadata Schema */
  description: string;
  /** Image field of the ERC721 Metadata Schema */
  image: string;
  /**
   * The id of the token in the DAR. This field is repeated as to keep
   * the complexity of implementations low.
   */
  token_id: string;
  /** The addres of the contract / common name / ticker */
  registry: string;
  /** Owner of the token */
  owner: string;
  /**
   * A list of the trait values of the token. The definitions of the traits are set in the DARSchema
   */
  traits: Array<TraitInstance>;
  /** A list of the files related to the NFT */
  files: Array<File>;
};
