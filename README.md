# NFT Schema

## Abstract

This document describes a schema that allows applications to display or represent NFT tokens, by building a schema that APIs representing NFT contracts and assets should comply to. In order to differentiate them better, tokens will be referred to as NFTs, and contracts containing those tokens will be addressed as DARs (standing for Digital Asset Registry). This builds on the ERC721 metadata extension, which created a simple definition per token that contains a name, a description, and an image.

## Motivation

This document was motivated by Decentraland’s investigation on how to facilitate information about the visual aspects of NFTs that can be rendered in a user’s inventory/wallet/marketplace, as well as within the 3D world. Correctly representing these tokens usually requires additional information about each kind of item (for example, items that can be worn and show up as hats, weapons, or other avatar customizations).

OpenSea already provides the ability to gather information about the visual parts of NFTs to render. It’s the de facto standard for wallets, marketplaces, and we hope that in the end the API will also allow for 3D previews of items.

Moving forward, we expect that specifying a token with this standard would facilitate the work of OpenSea when gathering information about the specifics of each application (health or strength for games’ characters, rarity, among others)

## Design Considerations

A standardized schema has to be as extensible as possible, so that any DAR creator might add its own traits/features to the NFTs without compromising compatibility with other platforms. That means that certain features/traits (HP, attack power) might be required to be defined using a mechanism similar to that of namespaces in programming languages, with one namespace per each game/platform. As an illustrative example, the Decentraland 3D viewer might require an NFT to define a `speed` for an avatar, whereas the name `speed` might be required for other uses, as it would be the case if the NFT is from the "Crypto Cars" collection which already defines a `speed` field. Namespacing these fields as`crypto-cars:speed` and `dcl-avatar:speed` would avoid name collision conflicts.

The schema should be restrictive on the possible values for fields, and include or restrict the basic set of fields defined by the ERC721 metadata format: `name`, `description`, and `image`. The current standard doesn’t enforce any particular format for the `image` field, creating unnecessary complexity for implementers.

The standard should dictate a way to specify both a schema for a description of the DAR as well as each NFT. There are a number of properties that apply to all NFTs in a contract equally (for example, all LAND parcels are not wearable items in Decentraland).

### Live API

https://schema.decentraland.org/dar
