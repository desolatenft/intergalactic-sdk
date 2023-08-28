# Intergalactic SDK
_version 0.1.0 "alpha centauri"_

Author: @desolatenft

The intergalactic SDK is a set of standards and development tools that allow to add interactive traits to 3D objects represented as NFTs. It's blockchain and 3D engine agnostic, albeit the initial version is developed for a-frame and solana.

## Contents of this repository

* `docs/`: documentation for the SDK, guides on how to contribute, etc.
* `traits/`: a collection of traits that can be used in your NFTs
* `sdk/`: core SDK

## Getting started

If you are:
* a Desolate owner, 
* or a 3D asset creator who wants to add traits to your NFT, 
* or a dev who wants to create their own traits
* or a metaverse developer looking to add trait support to your ecosystem...

...then get started by reading the docs at https://desolatenft.github.io/intergalactic-sdk/ 

## Compiling the docs

This repository uses [docsify](https://docsify.js.org/#/) to generate the documentation. To compile the docs, run:

```
npm install -g docsify-cli
docsify serve docs
```

Docs automatically update when you push to the `main` branch.

